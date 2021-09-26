<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-image" >
          <img src="../assets/xmaleya.jpg" class="object-cover">
      </div>
      <ul class="social-icons">
          <li class="">
            <a href=""><i class="bi bi-music-note-list text-blue-500"></i><br><span class="text-xs text-blue-500">{{itemInfo.titles}}</span></a>
          </li>
          <li class="">
            <a href=""><i class="bi bi-clock text-blue-500"></i><br><span class="text-xs text-blue-500">{{itemInfo.duration}}mn</span></a>
          </li>
          <li class="">
            <a href=""><i class="bi bi-cash-coin text-blue-500"></i><br><span class="text-xs text-blue-500">{{itemInfo.price}}XAF</span></a>
          </li>
      </ul>
      <div class="details">
        <h3 class="text-center">{{(itemInfo.itemTitle.split('').length <= 9)? itemInfo.itemTitle:itemInfo.itemTitle.substring(0, 9)+'...'}}</h3>
        <div class="">
          <div class="__icons">
            <ul class="recipe-details -mt-1 ">
              <li class="recipe-details-item time text-center"><span class="h-1 w-1 mb-1 border border-gray-200 shadow-md p-2 text-center text-gray-800"><i class="material-icons text-lg">remove_red_eye</i></span><span class="value font-semibold">{{itemInfo.views}}</span><span class="title hidden">views</span></li>
              <li class="recipe-details-item ingredients text-center"><span class="h-1 w-1 mb-1 border border-gray-300 shadow-md p-2 text-center text-gray-800 hover:bg-gray-300"><i class="material-icons text-lg">thumb_up</i></span><span class="value font-semibold">{{itemInfo.likes}}</span><span class="title hidden">likes</span></li>
              <li class="recipe-details-item servings text-center"><span class="h-1 w-1 mb-1 border border-gray-300 shadow-md p-2 text-center text-gray-800 hover:bg-gray-300"><i class="material-icons text-lg">share</i></span><span class="value font-semibold">{{itemInfo.shares}}</span><span class="title hidden">shares</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'itemExemple',
    props: {
      itemInfo: Object
    },
    setup (props) {
      let itemInfo = props.itemInfo

      return {
        itemInfo
      }
    }

}
</script>

<style lang="scss" scoped>

  $mobileSize: 'screen and (max-width: 900px)';

  %resize {
    height: 120px;
    width: 198px;
  }
  .card-wrapper {
    width: 100%;
    height: 90%;
    position: relative;
    padding: 5px;

    @media screen and (max-width: 650px) {
      height: 270px;
    }
  }

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    margin: -1px;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 3px 5px rgba(102, 102, 102, 0.3);
    cursor: pointer;
    transition: 0.5s;
      
      .card-image {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 70%;
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

      & img.object-cover {
        object-fit: cover ;
        height: 100%;
        width: 100%;
        // @media screen and (max-width: 356px) {
        //   height: 100%;
        //   object-fit: cover;
        // }

        // @media screen and (min-width: 580px) {
        //   width: 100%;
        //   height: 100%;
        //   object-fit: cover;
        // }
      }
  }


  /***social media***/
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

        // &:first-child {
        //   @media #{$mobileSize} {
        //     height: 65px
        //   }  
        // }

        @media #{$mobileSize} {
          position: relative;
          display: block;
          width: 50px;
          height: 60px;
          line-height: 20px;
          text-align: center;
          background: transparent;
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

      a span {

        @media #{$mobileSize} {
          color: white;
          font-weight: bold
        }
      }

    }

    @media #{$mobileSize} {
      position: absolute;
      top:35%;
      left: 88%;
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
      color: white;
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
    padding: 8px;

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
      transition: transform .2s;
        
      span:first-child:hover {
        @media screen and (min-width: 512px) {
          background-color: rgb(212, 211, 211)
        }
      }
      &:hover {
        transform: scale(1.06);

        @media #{$mobileSize} {
          border-top: none;
          background-color: white;
          border-radius: none;
          transform: none;
        }
      }

      img {

        @media #{$mobileSize} {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          border: 1px solid transparent;
          box-shadow: 2px 1px 5px rgba(70, 68, 68, 0.376);
          padding: 4px
        }

      }
    }

    
  }


  .value {
    color: rgba(59, 131, 246, 0.952);
    margin-left: .25rem;
    vertical-align: bottom;
    font-size: .9em;
    // font-weight: 100;

    @media #{$mobileSize} {
      font-size: .85em;
      // font-weight: 500;
      padding-left: 1px;

    }
  }

  .title {
    // display: block;
    // margin-top: -0.5rem;
    // color: black;
    // font-weight: 300;
    // padding-top: .25rem;
    // font-size: .57em;

    @media #{$mobileSize} {
      display: none
    }
  }


  img.inline {
    opacity: 1
  }

</style>