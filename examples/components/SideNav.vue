<style lang="scss">
.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding-right: 30px;
  transition: opacity 0.3s;
  &.page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 9999;
    margin-top: 80px;
    transition: padding-top 0.3s;
  }

  &.is-fade {
    transition: opacity 3s;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  > ul > .nav-item > a {
    margin-top: 15px;
  }

  > ul > .nav-item:nth-child(-n + 4) > a {
    margin-top: 0;
  }

  .nav-item {
    a {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: bold;

      &.active {
        color: #409eff;
      }
    }

    .nav-item {
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;

        &:hover,
        &.active {
          color: #409eff;
        }
      }
    }

    &.sponsors {
      & > .sub-nav {
        margin-top: -10px;
      }

      & > a {
        color: #777;
        font-weight: 300;
        font-size: 14px;
      }

      .nav-item {
        display: inline-block;

        a {
          height: auto;
          display: inline-block;
          vertical-align: middle;
          margin: 8px 12px 12px 0;

          img {
            width: 42px;
          }
        }

        &:first-child a img {
          width: 36px;
        }
      }
    }
  }

  .nav-group__title {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }

  #code-sponsor-widget {
    margin: 0 0 0 -20px;
  }
}

.el-scrollbar {
  position: relative;
  overflow: auto;
}

.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;
  li {
    font-size: 14px;
  }
}
</style>
<template>
  <div class="side-nav page-component__nav el-scrollbar" @mouseenter="isFade = false" :class="{ 'is-fade': isFade }" :style="navStyle">
    <ul>
      <li class="nav-item" v-for="(item, key) in data" :key="key">
        <a v-if="!item.path && !item.href">{{ item.name }}</a>
        <template v-if="item.groups">
          <div class="nav-group" v-for="(group, key) in item.groups" :key="key">
            <div class="nav-group__title">
              {{ group.groupName }}
            </div>
            <ul class="pure-menu-list">
              <li class="nav-item" v-for="(navItem, key) in group.list" v-show="!navItem.disabled" :key="key">
                <router-link active-class="active" :to="base + navItem.path" exact>{{ navItem.title }}</router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
    <!--<div id="code-sponsor-widget"></div>-->
  </div>
</template>
<script>
import bus from '../bus'

export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFade: false
    }
  },
  watch: {
    isFade(val) {
      bus.$emit('navFade', val)
    }
  },
  computed: {
    navStyle() {
      const style = {}
      style.opacity = this.isFade ? '0.5' : '1'
      return style
    }
  },
  methods: {},
  created() {
    bus.$on('fadeNav', () => {
      this.isFade = true
    })
  }
}
</script>
