<template>
<div class="pallet">
  <div class="item">
    <div class="title">{{ $t('preferences.appearance.custom_theme.background_color') }}</div>
    <el-color-picker v-model="background"></el-color-picker>
    <div class="title">{{ $t('preferences.appearance.custom_theme.selected_background_color') }}</div>
    <el-color-picker v-model="selectedBackground"></el-color-picker>
  </div>
  <div class="item">
    <div class="title">{{ $t('preferences.appearance.custom_theme.global_header_color') }}</div>
    <el-color-picker v-model="globalHeader"></el-color-picker>
    <div class="title">{{ $t('preferences.appearance.custom_theme.side_menu_color') }}</div>
    <el-color-picker v-model="sideMenu"></el-color-picker>
  </div>
  <div class="item">
    <div class="title">{{ $t('preferences.appearance.custom_theme.primary_color') }}</div>
    <el-color-picker v-model="primary"></el-color-picker>
    <div class="title">{{ $t('preferences.appearance.custom_theme.regular_color') }}</div>
    <el-color-picker v-model="regular"></el-color-picker>
  </div>
  <div class="item">
    <div class="title">{{ $t('preferences.appearance.custom_theme.secondary_color') }}</div>
    <el-color-picker v-model="secondary"></el-color-picker>
    <div class="title">{{ $t('preferences.appearance.custom_theme.border_color') }}</div>
    <el-color-picker v-model="border"></el-color-picker>
  </div>
  <div class="item">
    <div class="title">{{ $t('preferences.appearance.custom_theme.header_menu_color') }}</div>
    <el-color-picker v-model="headerMenu"></el-color-picker>
    <div class="title">{{ $t('preferences.appearance.custom_theme.wrapper_mask_color') }}</div>
    <el-color-picker v-model="wrapperMask" :show-alpha="true"></el-color-picker>
  </div>
</div>
</template>

<script>
export default {
  name: 'color-pallet',
  computed: {
    background: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.background_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          background_color: value
        })
      }
    },
    selectedBackground: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.selected_background_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          selected_background_color: value
        })
      }
    },
    globalHeader: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.global_header_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          global_header_color: value
        })
      }
    },
    sideMenu: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.side_menu_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          side_menu_color: value
        })
      }
    },
    primary: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.primary_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          primary_color: value
        })
      }
    },
    regular: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.regular_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          regular_color: value
        })
      }
    },
    secondary: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.secondary_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          secondary_color: value
        })
      }
    },
    border: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.border_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          border_color: value
        })
      }
    },
    headerMenu: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.header_menu_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          header_menu_color: value
        })
      }
    },
    wrapperMask: {
      get () {
        return this.$store.state.Preferences.Appearance.appearance.customThemeColor.wrapper_mask_color
      },
      set (value) {
        this.$store.dispatch('Preferences/Appearance/updateCustomThemeColor', {
          wrapper_mask_color: value
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pallet {
  display: flex;
  justify-content: start;

  .item {
    text-align: center;
    margin: 0 12px;

    .title {
      margin: 8px 0;
    }
  }
}
</style>
