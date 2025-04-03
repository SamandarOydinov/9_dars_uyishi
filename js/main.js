const courses = document.querySelector('.courses');
const sertificates = document.querySelector('.sertificates');

const slidesContainer = document.querySelector('.slides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const sertificatesContainer = document.querySelector('.sertificates');
const prevBtn_Sertificate = document.getElementById('prev-sertificate');
const nextBtn_Sertificate = document.getElementById('next-sertificate');

let index = 0;
let index_Sertificate = 0

const getAllPlatforma = (products) => {
  slidesContainer.innerHTML = '';
  products.forEach((element, i) => {
    slidesContainer.innerHTML += `
                    <div class="slide ${i === 0 ? 'active' : ''}">
                        <img src="${element.image}" alt="${element.title}">
                        <p>${element.title}</p>
                        <button><img src="../images/free-icon-right-arrow-3550091.png" alt="image not found"></button>
                    </div>
                `;
  });
};

nextBtn.addEventListener('click', () => {
  const totalSlides = slidesContainer.children.length;
  index = (index + 1) % totalSlides;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  const totalSlides = slidesContainer.children.length;
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  const slideWidth = document.querySelector('.slide').clientWidth + 20;
  slidesContainer.style.transform = `translateX(${-index * slideWidth}px)`;

  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => slide.classList.remove('active'));
  if (slides.length > index) {
    slides[index].classList.add('active');
  }
}

// const getAllPlatforma = (products) => {
//   products.forEach((element) => {
//     about.innerHTML += `
//         <div class="cardOfAbout">
//             <div class="cardOfButton-image">
//                 <img src="${element.image}" alt="image not found">
//             </div>
//             <div>
//                 <p>${element.title}</p>
//             </div>
//             <div>
//                 <button><img src="../images/free-icon-right-arrow-3550091.png"></button>
//             </div>
//         </div>
//     `;
//   });
// };

const getAllCourses = (products) => {
  products.forEach((element) => {
    courses.innerHTML += `
        <div class="cardOfCourses">
            <div class="courses-img">
                <img src="${element.image}" alt="image not found">
            </div>
            <div class="course-price">
                <p>${element.price} $</p>
            </div>
            <div>
                <p>${element.title}</p>
            </div>
            <div class="nextBtn">
                <button>Buy ></button>
            </div>
        </div>
        `;
  });
};

const getAllSertificates = (products) => {
    sertificatesContainer.innerHTML = '';
  products.forEach((element, i) => {
    console.log("i = ", i);
    sertificates.innerHTML += `
        <div class="cardOfSertificate ${i === 0 ? 'active' : ''}">
            <div>
                <img src="${element.image}" alt="image not found">
            </div>
            <div>
                <p>${element.title}</p>
            </div>
        </div>
    `;
  });
};

nextBtn_Sertificate.addEventListener('click', () => {
  const totalSertificates = sertificatesContainer.children.length;
  index_Sertificate = (index_Sertificate + 1) % totalSertificates;
  updateSertificate();
});

prevBtn_Sertificate.addEventListener('click', () => {
  const totalSertificates = sertificatesContainer.children.length;
  index_Sertificate = (index_Sertificate - 1 + totalSertificates) % totalSertificates;
  updateSertificate();
});

function updateSertificate() {
  const sertificateWidth =
    document.querySelector('.cardOfSertificate').clientWidth + 20;
  sertificatesContainer.style.transform = `translateX(${-index_Sertificate * sertificateWidth}px)`;

  const sertificates = document.querySelectorAll('.cardOfSertificate');
  sertificates.forEach((sertificates) => sertificates.classList.remove('active'));
  if (sertificates.length > index_Sertificate) {
    sertificates[index_Sertificate].classList.add('active');
  }
}




fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((result) => {
    getAllPlatforma(result);
    getAllCourses(result);
    getAllSertificates(result);
  })
  .catch((err) => {
    console.log('err: ', err);
  });
