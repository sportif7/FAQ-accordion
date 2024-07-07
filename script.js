
   const faqs = document.querySelectorAll('.faq');

      faqs.forEach((faq)=>{
        let icon = faq.querySelector(".icon");
            icon.addEventListener("click", () => {
              faq.classList.toggle("active");
              if (faq.classList.contains("active")){
                  faq.querySelector(".icon").src="images/icon-minus.svg";
              }
              else{
                faq.querySelector(".icon").src="images/icon-plus.svg";
              }
            })
      })



