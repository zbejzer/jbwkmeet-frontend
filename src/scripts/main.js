import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'

import 'bootstrap-icons/font/bootstrap-icons.css'

import '../styles/style.scss'
import { start } from '@popperjs/core'

const OPTIONS = { slidesToScroll: 1, loop: true, align: 'start' }

const emblaNode = document.querySelector('#photos-carousel')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
