export const createCarouselSlide = (template, image) => {
    const slideNode = template.content.cloneNode(true)
    slideNode.querySelector('img').src = image

    return slideNode
}
