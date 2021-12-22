class Slider {
  constructor(node) {
    this.root = typeof node === 'string' ? document.querySelector(node) : node
    this.$ = selector => this.root.querySelector(selector)
    this.$$ = selector => this.root.querySelectorAll(selector)

    this.slider = node

    this.autoplay = true;
    this.autoplay_Delay = 1500; // ms
    this.autoplayId = 0;
    this.intervalId = 0;

    this.slider_items = this.$$('li')
    this.slider_item_container = this.$('.slider-item-container')
    this.indicator_container = this.$('.indicator-container')

    this.left_arrow = this.$(".left-arrow");
    this.right_arrow = this.$(".right-arrow");

    this.slider_item_width = 0;
    this.curIndex = 0;

    this.start()
    this.bind()
  }

  start() {
    this.initElement();
    if (this.autoplay) {
      this.startAnimation(this.slider_item_container);
    }
  }

  bind() {
    this.initEvent();
  }

  initElement() {
    let firstItem = this.slider_items[0].cloneNode(true);
    this.slider_item_container.appendChild(firstItem);
    this.slider_item_width = this.slider_items[0].offsetWidth;
  }

  initEvent() {
    this.slider.addEventListener("mouseover", () => {
      clearTimeout(this.autoplayId);
      this.autoplay = false;
    });
    this.slider.addEventListener("mouseout", () => {
      this.autoplay = true;
      this.startAnimation(this.slider_item_container);
    });

    let indicators = this.indicator_container.children;
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].setAttribute("index", i);
      let self = this
      indicators[i].addEventListener("click", function () {
        let index = parseInt(this.getAttribute("index"));
        self.next(index);
      });
    }


    this.left_arrow.addEventListener("click", () => {
      this.prev();
    });
    this.right_arrow.addEventListener("click", () => {
      this.next();
    });
  }

  animate(element, target) {
    let step = 10;
    let time = 10;
    let gap = (Math.abs(target - element.offsetLeft) / this.slider_item_width);
    if (gap > 1) {
      step = step * gap;
      time = time / gap;
    }
    if (element) {
      step = (element.offsetLeft > target) ? -step : step;
      clearInterval(this.intervalId);
      this.setCurrentActiveIndicator(this.curIndex);
      let self = this
      this.intervalId = setInterval(function () {
        if ((step < 0) && (Math.abs(element.offsetLeft + step) < Math.abs(target))) {
          element.style.left = element.offsetLeft + step + "px";
        } else {
          if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
            element.style.left = element.offsetLeft + step + "px";
          } else {
            clearInterval(self.intervalId);
            self.intervalId = -1;
            element.style.left = target + "px";
            if (self.autoplay) {
              self.startAnimation(element);
            }
          }
        }
      }, time);
    }
  }

  prev() {
    let element = this.slider_item_container;
    let li = element.children;
    this.curIndex = this.curIndex - 1;
    if (this.curIndex < 0) {
      element.style.left = -((li.length-1)*this.slider_item_width) + "px";
      this.curIndex = li.length-2;
    }
    this.animate(element, -(this.curIndex*this.slider_item_width));
  }

  next(nextIndex) {
    let element = this.slider_item_container;
    let li = element.children;
    if ((nextIndex !== null) && (typeof(nextIndex) !== "undefined")) {
      this.curIndex = nextIndex;
    } else {
      this.curIndex = this.curIndex + 1;
      if (this.curIndex > (li.length-1)) {
        element.style.left = 0 + "px";
        this.curIndex = 1;
      }
    }
    this.animate(element, -(this.curIndex*this.slider_item_width));
  }

  startAnimation(element) {
    if (this.autoplayId) {
      clearTimeout(this.autoplayId);
    }
    this.autoplayId = setTimeout(() => {
      this.next();
    }, this.autoplay_Delay);
  }

  setCurrentActiveIndicator(index) {
    let indicators = this.indicator_container.children;
    if (index === indicators.length) {
      index = 0;
    }
    for (let i = 0; i < indicators.length; i++) {
      if (i === index) {
        indicators[i].className = "indicator active";
      } else {
        indicators[i].className = "indicator";
      }
    }
  }
}

export default Slider
