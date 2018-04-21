import store from '../vuex/store'
// 使用 Web Audio API
// const AudioContext = false
const AudioContext = wx.createInnerAudioContext

export const hasWebAudioAPI = {
  data: !!AudioContext
}

export const music = {}
;(() => {
  if (!hasWebAudioAPI.data) {
    return
  }
  const url = './static/music.mp3'
  const context = wx.createInnerAudioContext()
  // context.src = url
  context.src = 'https://nzijkk7pu.qnssl.com/Tetris-ZrQyi_JngQTdtxninMN1.mp3'
  // context.autoplay = true
  context.onError((res) => {
    console.log(res)
    hasWebAudioAPI.data = false
  })

  function getSource () {
    const context = wx.createInnerAudioContext()
    context.src = 'https://nzijkk7pu.qnssl.com/Tetris-ZrQyi_JngQTdtxninMN1.mp3'
    return {
      start (when, offset, duration) {
        context.startTime = offset
        context.play()
        setTimeout(() => {
          context.stop()
        }, duration * 1000)
      }
    }
  }

  music.killStart = () => {
    // 游戏开始的音乐只播放一次
    music.start = () => {}
  }

  music.start = () => {
    // 游戏开始
    music.killStart()
    if (!store.state.music) {
      return
    }
    getSource().start(0, 3.7202, 3.6224)
  }

  music.clear = () => {
    // 消除方块
    if (!store.state.music) {
      return
    }
    getSource().start(0, 0, 0.7675)
  }

  music.fall = () => {
    // 立即下落
    if (!store.state.music) {
      return
    }
    getSource().start(0, 1.2558, 0.3546)
  }

  music.gameover = () => {
    // 游戏结束
    if (!store.state.music) {
      return
    }
    getSource().start(0, 8.1276, 1.1437)
  }

  music.rotate = () => {
    // 旋转
    if (!store.state.music) {
      return
    }
    getSource().start(0, 2.2471, 0.0807)
  }

  music.move = () => {
    // 移动
    if (!store.state.music) {
      return
    }
    getSource().start(0, 2.9088, 0.1437)
  }
})()
