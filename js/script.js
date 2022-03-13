let form = document.querySelector('.form'),
    formRequired = document.querySelectorAll('.required'),
    formButton = document.querySelector('.form-button'),
    inputName = document.querySelector('.input-name'),
    inputDescription = document.querySelector('.input-description'),
    inputImage = document.querySelector('.input-image'),
    inputPrice = document.querySelector('.input-price'),
    productList = document.querySelector('.product-list');



formButton.disabled = true;

inputPrice.onblur = function() {
    inputPrice.value = inputPrice.value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
}
inputPrice.onfocus = function() {
    inputPrice.value = inputPrice.value.replace(/\s/g, '');
}

form.onkeyup = function () {

    if (inputName.value !== '' && inputImage.value !== '' && inputPrice.value !== '') {
        formButton.style.background = '#7BAE73';
        formButton.style.color = '#FFFFFF';
        formButton.disabled = false;
    } else {
        formButton.style.background = '#EEEEEE';
        formButton.style.color = '#B4B4B4';
        formButton.disabled = true;
    }

    if (document.querySelector('.form-error')) {
        for (let x of document.querySelectorAll('.form-error')) {
            x.remove();
        }
    }

    formRequired.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            var error = document.createElement('p');
            error.innerHTML = 'Поле является обязательным';
            error.classList.add('form-error');
            input.after(error);
        } else {
            input.classList.remove('error');
        }
    })

    return false;

}


formButton.onclick = function (event) {

    if (inputName.value !== '' && inputImage.value !== '' && inputPrice.value !== '') {

        var productCard = document.createElement('div');
        productList.appendChild(productCard);
        productCard.classList.add('product-card');

        var li = document.createElement('li');
        productCard.appendChild(li);

        var productCardPhotoWrapper = document.createElement('div');
        productCardPhotoWrapper.classList.add('product-card-photo-wrapper');
        li.appendChild(productCardPhotoWrapper);

        var img = document.createElement('img');
        productCardPhotoWrapper.appendChild(img);
        img.src = inputImage.value;
        img.style.width = "332px";
        img.style.height = "200px";

        var productCardProperty = document.createElement('div');
        li.appendChild(productCardProperty);
        productCardProperty.classList.add('product-card-property');

        var productName = document.createElement('p');
        productCardProperty.appendChild(productName);
        productName.classList.add('product-name');
        productName.innerHTML = inputName.value;

        var productDescription = document.createElement('p');
        productCardProperty.appendChild(productDescription);
        productDescription.classList.add('product-description');
        productDescription.innerHTML = inputDescription.value;
        
        var productPrice = document.createElement('p');
        productCardProperty.appendChild(productPrice);
        productPrice.classList.add('product-price');
        productPrice.innerHTML = inputPrice.value + ' руб.';

        inputName.value = '';
        inputDescription.value = '';
        inputImage.value = '';
        inputPrice.value = '';
        formButton.style.background = '#EEEEEE';
        formButton.style.color = '#B4B4B4';
    }


    return false;

}












