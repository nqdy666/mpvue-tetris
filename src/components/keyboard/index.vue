<template>
  <div
        class="keyboard"
        :style="'margin-top:'+fillingNum+'px'"
      >
        <vbutton
          color="blue"
          size="s1"
          :top="0"
          :left="374"
          :label="rotation"
          arrow="translate(0, 63px)"
          :position="true"
          :active="keyboard['rotate']"
          @m_touchstart="handleTouchStart('rotate')"
          @m_touchend="handleTouchEnd('rotate')"
          ref="dom_rotate"
        />
        <vbutton
          color="blue"
          size="s1"
          :top="180"
          :left="374"
          :label="labelDown"
          arrow="translate(0,-71px) rotate(180deg)"
          :active="keyboard['down']"
          @m_touchstart="handleTouchStart('down')"
          @m_touchend="handleTouchEnd('down')"
          ref="dom_down"
        />
        <vbutton
          color="blue"
          size="s1"
          :top="90"
          :left="284"
          :label="labelLeft"
          arrow="translate(60px, -12px) rotate(270deg)"
          :active="keyboard['left']"
          @m_touchstart="handleTouchStart('left')"
          @m_touchend="handleTouchEnd('left')"
          ref="dom_left"
        />
        <vbutton
          color="blue"
          size="s1"
          :top='90'
          :left='464'
          :label="labelRight"
          arrow="translate(-60px, -12px) rotate(90deg)"
          :active="keyboard['right']"
          @m_touchstart="handleTouchStart('right')"
          @m_touchend="handleTouchEnd('right')"
          ref="dom_right"
        />
        <vbutton
          color="blue"
          size="s0"
          :top="100"
          :left="52"
          :label="labelDropSpace"
          :active="keyboard['drop']"
          @m_touchstart="handleTouchStart('space')"
          @m_touchend="handleTouchEnd('space')"
          ref="dom_space"
        />
        <vbutton
          color="red"
          size="s2"
          :top="0"
          :left="196"
          :label="labelResetR"
          :active="keyboard['reset']"
          @m_touchstart="handleTouchStart('r')"
          @m_touchend="handleTouchEnd('r')"
          ref="dom_r"
        />
        <vbutton
          color="green"
          size="s2"
          :top="0"
          :left="106"
          :label="labelSoundS"
          :active="keyboard['music']"
          @m_touchstart="handleTouchStart('s')"
          @m_touchend="handleTouchEnd('s')"
          ref="dom_s"
        />
        <vbutton
          color="green"
          size="s2"
          :top="0"
          :left="16"
          :label="labelPauseP"
          :active="keyboard['pause']"
          @m_touchstart="handleTouchStart('p')"
          @m_touchend="handleTouchEnd('p')"
          ref="dom_p"
        />
      </div>
</template>
<style src="./index.css"></style>

<script src="./index.js">
</script>
