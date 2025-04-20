import EmblaCarousel from 'embla-carousel'

import 'bootstrap-icons/font/bootstrap-icons.css'

import '../styles/style.scss'

import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { createCarouselSlide } from './carouselImagesLoader'

const carouselImages = Object.values(
    import.meta.glob('/images/carousel/*.{png,jpg,jpeg,webp,PNG,JPEG,WEBP}', {
        eager: true,
        query: '?url',
        import: 'default',
    })
)

// Embla carousel

const emblaOptions = { slidesToScroll: 1, loop: true, align: 'start' }

const emblaNode = document.querySelector('#photos-carousel')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const containerNode = emblaNode.querySelector('.embla__container')

// Slides generation

const slideTemplate = document.querySelector('#slide-template')

carouselImages.forEach((image) => {
    containerNode.appendChild(createCarouselSlide(slideTemplate, image))
})

const emblaApi = EmblaCarousel(viewportNode, emblaOptions)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
