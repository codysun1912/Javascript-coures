/* <div class="modal">
<div class="modal-content">
    <a><i class="fa-solid fa-xmark modal-close"></i></a>
    <div class="modal-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio in doloremque praesentium ex, quae reiciendis repudiandae nemo voluptas, nihil natus facilis maxime perspiciatis eos soluta deserunt at culpa recusandae earum!</div>
    <div class="modal-action">
        <button class="modal-summit">Summit</button>
        <button class="modal-cancel">Cancel</button>
    </div>

</div>
</div> */
const body = document.body;
const modal = document.createElement('div');
modal.classList.add("modal");
const modalContent = document.createElement('div');
modalContent.classList.add("modal-content");
const a = document.createElement('a');
const modalClose = document.createElement('i');
modalClose.className = "fa-solid fa-x mark modal-close";
const modalDesc = document.createElement('div');
modalDesc.classList.add("modal-desc");
modalDesc.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio in doloremque praesentium ex, quae reiciendis repudiandae nemo voluptas, nihil natus facilis maxime perspiciatis eos soluta deserunt at culpa recusandae earum!";
const modalAction = document.createElement('div');
modalAction.classList.add("modal-action");
const modalSummit = document.createElement('button');
modalSummit.classList.add("modal-summit");
const modalCancel = document.createElement('button');
modalSummit.classList.add("modal-cancel");

modalAction.appendChild(modalCancel);
modalAction.appendChild(modalSummit);
modalContent.appendChild(modalAction);
modalContent.appendChild(modalDesc);
a.appendChild(modalClose);
modalContent.appendChild(a);
modal.appendChild(modalContent);
body.appendChild(modal);


const model = document.querySelector(".modal");
setTimeout(function(){
    model.classList.add("is-show");

}, 3000);

