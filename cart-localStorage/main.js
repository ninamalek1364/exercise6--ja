let shop = document.getElementById("shop");
let shopItemsData = [
    {
        id: "1",
        name: "sport",
        price: "40",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
        img: "img/download.jpeg",
    },
    {
        id: "2",
        name: "normal mens shoes",
        price: "45",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
        img: "img/download1.jpeg",
    },
    {
        id: "3",
        name: "sport leather",
        price: " 65",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
        img: "img/download2.jpeg",
    },

    {
        id: "4",
        name: "sport",
        price: "78",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
        img: "img/images3.jpeg",
    },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;

            let search = basket.find((x) => x.id === id) || [];
            return `<div class="item col-md-3 g-4 rounded-3">
  
        <div class="card shadow-lg h-100" id="card">
           
            <div class="h-100 item" id=product-id-${id}>
            <img src="${img}" class="card-img-top h-100" alt="..." />
            </div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <p class="card-text mb-2">${price}$</p>
                

                <div class="buy d-flex justify-content-center">
                    <button onclick="increment(${id})" class="btn btn-success  fw-bolder">+</button>
                    <div id=${id} class="quantity p-2 text-center w-25 mx-2" >${
                search.item === undefined ? 0 : search.item
            }
               
            </div>
                    <button onclick="decrement(${id})" class="btn btn-danger  fw-bolder">-</button>
                </div>
            </div>
        </div>
    </div>
</div>`;
        })
        .join(""));
};
generateShop();

let increment = (id) => {
    let search = basket.find((x) => x.id === id);
    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};

let decrement = (id) => {
    let search = basket.find((x) => x.id === id);
    if (search.item === 0) return;
    else search.item -= 1;
    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);

    document.getElementById(id).innerHTML = search.item;
    calculaition();
};

let calculaition = () => {
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculaition();
