<template>
    <div class="container">
        <div class="container__info">
            <span><i class="fas fa-eye"></i>2350</span>
            <span><i class="fas fa-comment-alt"></i>624</span>
            <span><i class="fas fa-download"></i>1470</span>
        </div>
        <div class="container__profile">
            <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="people"
            />
            <div class="container__profile__text">
            <h2>White Mountains</h2>
            <p>by <b>Joseph Therrien</b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "itemCarousel",
    props: {
        image: String,
        itemTitle: String,
        titles: Number,
        duration: Number,
        creationDate: Date,
        likes: Number,
        shares: Number,
        views: Number
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #80afcd;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        line-height: 1.4;
    }
    .container {
        background: url("https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 350px;
        height: 500px;
        position: relative;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
    }
    .container .container__info {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 20%;
        display: flex;
        align-items: flex-end;
        padding: 15px 30px;
        color: #fff;
    }
    .container .container__info span {
        margin-right: 20px;
    }
    .container .container__info i {
        margin-right: 10px;
    }
    .container .container__profile {
        background-color: #e4f2fd;
        display: flex;
        align-items: center;
        padding: 20px;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .container .container__profile img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-position: center;
        object-fit: cover;
        margin-right: 10px;
    }
    .container .container__profile h2 {
        color: #334454;
        font-size: 1.2rem;
    }
    .container .container__profile p {
        color: #a1b2bc;
        font-size: 0.8rem;
    }
    .container .container__profile p b {
        font-style: italic;
    }

</style>
