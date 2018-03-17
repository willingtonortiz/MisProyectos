class Acordeon {
    private titulos: any;
    constructor(nombre: string) {
        var acordeon = document.getElementById(nombre);
        this.titulos = acordeon.getElementsByClassName("titulo");
        this.inicializarDatos();
    }

    inicializarDatos = () => {
        for (var i = 0; i < this.titulos.length; i++) {
            this.titulos[i].nextElementSibling.style.maxHeight = "0px";
            this.titulos[i].addEventListener("click", (evento: any) => {
                evento.target.classList.toggle('activo');
                this.toggleAltura(evento.target.nextElementSibling);
            });
        }
    }
    toggleAltura = (Item: any) => {
        if (Item.style.maxHeight === '0px') {
            Item.style.maxHeight = Item.scrollHeight + 'px';
        }
        else {
            Item.style.maxHeight = '0px';
        }
    }
}
class Tab {
    private actual: number;
    private tituloActual: any;
    private contenidos: any;
    constructor(nombre: string) {
        var tabs = document.getElementById(nombre);
        var titulos = tabs.getElementsByClassName("titulo");
        this.contenidos = tabs.getElementsByClassName("contenido");
        this.actual = 0;
        this.iniciarTabs(titulos);
    }
    iniciarTabs = (titulos: any) => {
        for (var i = 0; i < this.contenidos.length; i++) {
            titulos[i].setAttribute("data-titulo", i + '');

            titulos[i].addEventListener("click", (evento: any) => {
                if (parseInt(evento.target.getAttribute("data-titulo")) !== this.actual) {
                    /* Titulos */
                    this.tituloActual.classList.toggle("activo");
                    this.tituloActual = evento.target;
                    this.tituloActual.classList.toggle("activo");
                    /* Contenido */
                    this.contenidos[this.actual].style.display = "none";
                    this.actual = parseInt(evento.target.getAttribute("data-titulo"));
                    this.contenidos[this.actual] = this.contenidos[this.actual];
                    this.contenidos[this.actual].style.display = "block";
                }
            });
            this.contenidos[i].style.display = "none";
        }
        this.tituloActual = titulos[0];
        this.tituloActual.classList.toggle("activo");
        this.contenidos[this.actual].style.display = "block";
    }
}

class Slider {
    private slider: any;
    private slides: any;
    private duracion: number;
    private cantSlides: any;
    private actualSlide: number;
    private botones: any;

    constructor(nombre: string, parametros: any) {
        this.slider = document.getElementById(nombre).getElementsByClassName("jw-sliderWrapper")[0];
        this.slides = this.slider.getElementsByClassName("jw-sliderItem");
        this.cantSlides = this.slides.length;
        this.actualSlide = 1;
        this.duracion = parametros.duracion || 3000;
        if (parametros.botones) this.agregarBotones(parametros.botones);
        this.iniciarMovimiento();
    }
    inicializarDatos = () => {
        for (let i = 0; i < this.cantSlides; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[this.actualSlide - 1].style.display = "block";
    }
    iniciarMovimiento = () => {
        this.inicializarDatos();
        setInterval(() => { this.movimiento(NaN); }, this.duracion);
    }
    movimiento = (numero: number) => {
        console.log(this.actualSlide);
        this.toggleButton();
        this.slides[this.actualSlide - 1].style.display = "none";
        this.actualSlide++;
        if (this.actualSlide > this.cantSlides) this.actualSlide = 1;
        this.actualSlide = numero || this.actualSlide;
        this.toggleButton();
        this.slides[this.actualSlide - 1].style.display = "block";
    }
    toggleButton = () => {
        if (this.botones) this.botones[this.actualSlide - 1].classList.toggle("active");
    }
    agregarBotones = (botones: any) => {
        this.botones = [];
        var contenedor = document.createElement("div");
        contenedor.classList.add("jw-sliderButtons");
        for (var i = 0; i < this.cantSlides; i++) {
            var boton = document.createElement("button");
            if (botones.enumeracion) {
                boton.innerText = (i + 1) + '';
            }
            if (botones.clickeable) {
                boton.setAttribute("data-slide", (i + 1) + '');
                boton.addEventListener("click", (evento: any) => {
                    var numero = parseInt(evento.target.getAttribute("data-slide"));
                    if (this.actualSlide !== numero) {
                        this.movimiento(numero);
                    }
                });
            }
            this.botones.push(boton);
            contenedor.appendChild(boton);
        }
        this.botones[this.actualSlide - 1].classList.toggle("active");
        this.slider.parentElement.appendChild(contenedor);
    }
}