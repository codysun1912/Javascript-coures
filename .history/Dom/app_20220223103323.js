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

const modal = document.createElement('div');
modal.classList.add("modal");


const model = document.querySelector(".modal");
setTimeout(function(){
    model.classList.add("is-show");

}, 3000);

