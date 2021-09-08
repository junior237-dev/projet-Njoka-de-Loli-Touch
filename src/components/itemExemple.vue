<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-image" >
          <img src="../assets/aveiroDjess.jpg" class="object-cover">
      </div>
      <ul class="social-icons">
          <li class="">
            <a href=""><i class="bi bi-music-note-list text-blue-500"></i><br><span class="text-xs text-blue-500">15</span></a>
          </li>
          <li class="">
            <a href=""><i class="bi bi-clock text-blue-500"></i><br><span class="text-xs text-blue-500">140min</span></a>
          </li>
          <li class="">
            <a href=""><i class="bi bi-cash-coin text-blue-500"></i><br><span class="text-xs text-blue-500">500Fcfa</span></a>
          </li>
      </ul>
      <div class="details">
        <h2>Un titre pour l'item</h2>
        <div class="">
          <div class="__icons">
            <ul class="recipe-details -mt-1">
              <li class="recipe-details-item time"><img src="../assets/icones/eye.png" class="inline h-3 w-3  mb-1"><span class="value">999</span><span class="title">views</span></li>
              <li class="recipe-details-item ingredients"><img src="../assets/icones/like.png" class="inline h-3 w-3 mb-1"><span class="value">5</span><span class="title">likes</span></li>
              <li class="recipe-details-item servings"><img src="../assets/icones/share.png" class="inline h-3 w-3 mb-1"><span class="value">48</span><span class="title">shares</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'itemExemple'
}
</script>

<style lang="scss" scoped>

  $mobileSize: 'screen and (max-width: 642px)';

  %resize {
    height: 120px;
    width: 198px;
  }
  .card-wrapper {
    width: 100%;
    height: 220px;
    position: relative;
  }

  .card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: 0.5s;
      
      .card-image {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #000;
        transition: .5s;

        @media #{$mobileSize} {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: 2;
          background-color: #000;
          transition: none;
        }
        
      }

      &:hover img.object-cover {
        opacity: 0.3;
        transition: .5s;
        @media #{$mobileSize} {
          opacity: 1;
          transition: none;
        }
      }
  }


  /***social media */
  .social-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;


    li {
      list-style: none;
        
      a {
        position: relative;
        display: block;
        width: 50px;
        height: 50px;
        line-height: 20px;
        text-align: center;
        background: rgb(0, 0, 0);
        padding: 3px 0;
        font-size: 18px;
        color: #333;
        font-weight: bold;
        margin: 0 6px;
        transition: .4s;
        transform: translateY(200px);
        opacity: 0;

        @media #{$mobileSize} {
          position: relative;
          display: block;
          width: 50px;
          height: 50px;
          line-height: 20px;
          text-align: center;
          background: rgba(0, 0, 0, 0.835);
          padding: 3px 0;
          font-size: 18px;
          color: #333;
          font-weight: bold;
          margin: 0 6px;
          opacity: 1;
          transition: none;
          transform: none;
        }
      } 

    }

    @media #{$mobileSize} {
      position: absolute;
      top:34%;
      left: 92%;
      display: block;
      z-index: 3
    }
  }

  .card:hover .social-icons li a {
    transform: translateY(0px);
    opacity: 1; 
  }

    // .social-icons li a:hover {
    //     background: #000; 
    //     transition: .2s;
    //     .fab {
    //         color: rgb(255, 255, 255);
    //     } 
    // }

  .social-icons li a .bi {
    transition: .8s;
        
    &:hover {
      transform: rotateY(360deg);
      color: #fff;
    } 

    
    @media #{$mobileSize} {
      color: #fff;
    }
  }

  .card:hover li:nth-child(1) a {
    transition-delay: 0.1s;
  }
  .card:hover li:nth-child(2) a {
    transition-delay: 0.3s;
  }
  .card:hover li:nth-child(3) a {
    transition-delay: 0.5s;
  }
  .card:hover li:nth-child(4) a {
    transition-delay: 0.4s;
  }

    /*** personal details ***/

  .details {
    position: absolute;
    bottom: -18px;
    left: 0;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 40%;//120px;
    z-index: 4;
    padding: 10px;

    h2 {
      margin-top: -10px;
      padding: 0;
      text-align: center;
      font-weight: 600;
    }
  }




  .recipe-details {
    display: flex;
    list-style: none;
    padding: .3rem;
    margin: 0;
    justify-content: space-around;

    .recipe-details-item {
      display: flex-1;
      cursor: pointer;
      vertical-align: middle;
      border-top: solid 0 transparent;
      background-color: transparent;
      border-radius: 0;
      padding: 0 4px;
      width: auto;
      transition: transform .5s, border-top .5s, background-color .3s,  border-radius .3s, transform .3s;
        

      &:hover {
        border-top: solid 2px rgba(68, 174, 245, 0.959);
        background-color: white;
        border-radius: 10px;
        transform: scale(1.06);
      }

      img {

        @media #{$mobileSize} {
          height: 20px;
          width: 20px
        }

      }

      @media #{$mobileSize} {
        border: 1px solid transparent;
        border-radius: 30%;
        box-shadow: 0 2px 6px rgba(156, 155, 155, 0.794)//rgba(79, 145, 199, 0.815)
      }
    }

    i {
      font-size: 10px;
    }
  }


  .value {
    color: rgba(59, 131, 246, 0.952);
    margin-left: .25rem;
    vertical-align: bottom;
    font-size: .75rem;
    font-weight: 100;

    @media #{$mobileSize} {
      font-size: 1.1rem;
      font-weight: 500;
      padding-left: 5px;
    }
  }

  .title {
    display: block;
    margin-top: -0.5rem;
    color: black;
    font-weight: 300;
    padding-top: .25rem;
    font-size: .57em;

    @media #{$mobileSize} {
      display: none
    }
  }


  img.inline {
    opacity: 1
  }

</style>