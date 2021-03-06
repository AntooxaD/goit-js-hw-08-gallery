const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const backdropRef = document.querySelector('.lightbox__overlay');
const imageRef = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');



const markup = createImage(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin', markup);

backdropRef.addEventListener('click', onCloseBackdrop)
galleryRef.addEventListener('click', onImageClick);
closeBtn.addEventListener('click', onCloseBtnClick);



function createImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => { return `<li class="gallery__item><a class="gallery__link" href = '${original}';><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;})
    .join('');
};

function onImageClick(e) {
  e.preventDefault();
  if (e.target === e.currentTurget) return;
    imageRef.src = e.target.dataset.source;
    modalRef.classList.add('is-open');
    window.addEventListener('keydown', onEscapeClose);
    window.addEventListener('keydown', onArrow)
  }


function onCloseBtnClick(e) {
   
    modalRef.classList.remove('is-open');
   imageRef.src = '';
   window.removeEventListener('keydown', onEscapeClose);
   window.removeEventListener('keydown', onArrow)
  
};
function onCloseBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseBtnClick()
  }
}
function onEscapeClose(e) {
  if (e.code === 'Escape') {
    onCloseBtnClick()
  }
};
const onArrow = e => {
  let nextIndex = galleryItems.findIndex(image => image.original === imageRef.src);
  if (e.code === 'ArrowRight') {
    if (nextIndex < galleryItems.length - 1) {
      nextIndex += 1;
    } else nextIndex = 0
  }
  if (e.code === 'ArrowLeft') {
    if (nextIndex > 0) {
      nextIndex -= 1;
    } else nextIndex = galleryItems.length - 1
  };
  imageRef.src = galleryItems[nextIndex].original
}

