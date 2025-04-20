import EmblaCarousel from 'embla-carousel'

import 'bootstrap-icons/font/bootstrap-icons.css'

import '../styles/style.scss'

import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { createCarouselSlide } from './carouselImagesLoader'

// Slides generation

const carouselImagesSrc = 'images/carousel/'

const carouselImages = [
    '_MG_2101.jpg',
    '_MG_2105.jpg',
    '_MG_2127.jpg',
    '_MG_2131.jpg',
    '_MG_2162.jpg',
    '_MG_2170.jpg',
    '_MG_2199.jpg',
    '_MG_2231.jpg',
    '_MG_2232.jpg',
    '_MG_2235.jpg',
    '_MG_2236.jpg',
    '_MG_2239.jpg',
    '_MG_2332.jpg',
    '_MG_2390.jpg',
]

// Embla carousel

const emblaOptions = { slidesToScroll: 1, loop: true, align: 'start' }

const emblaNode = document.querySelector('#photos-carousel')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const containerNode = emblaNode.querySelector('.embla__container')

// Slides generation

const slideTemplate = document.querySelector('#slide-template')

carouselImages
    .map((str) => carouselImagesSrc.concat(str))
    .forEach((image) => {
        containerNode.appendChild(createCarouselSlide(slideTemplate, image))
    })

const emblaApi = EmblaCarousel(viewportNode, emblaOptions)

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
    emblaApi,
    prevBtnNode,
    nextBtnNode
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
