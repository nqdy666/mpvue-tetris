import { transform, i18n, lan } from '../../unit/const'
import { isMobile } from '../../unit'
export default {
  name: 'Guide',
  data() {
    return {
      isMobile: isMobile()
    }
  },
  computed: {
    linkTitle: () => i18n.linkTitle[lan],
    github: () => i18n.github[lan],
    QRCode: () => i18n.QRCode[lan],
    QRTitle: () => i18n.QRNotice[lan],
    QRSrc: () =>
      window.location.protocol + '//' + window.location.host +
      '/static/qr.png'
  },
  mounted() {
    window.addEventListener('resize', this.resize.bind(this), true)
  },
  methods: {
    resize() {
      this.isMobile = isMobile()
    }
  }
}
