<template>
  <div class="line-container">
    <div class="border_normal line-div">
      正常使用1px border效果（本DEMO请在移动端环境下查看）
    </div>
    <div class="border_gradient line-div">
      法一：使用渐变实现，使用两种颜色填充 1px 宽内容
    </div>
    <div class="border_scale line-div">
      法二：使用缩放实现，对 1px 高度线条进行0.5倍缩放
    </div>
    <div class="border_base64 line-div">
      法三：base64 编码实现
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line-container {
    height: 200px;
    overflow-y: auto;
    background: var(--c-bg);
    .line-div {
        height: 80px;
        margin: 30px auto;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /*border-top:1px*/
    .border_normal,
    .border_gradient,
    .border_scale,
    .border_boxshadow,
    .border_base64{
        border-top: 1px solid var(--theme);
    }

    #dpr {
        position: relative;
        display: inline-block;
        font-size: 12px;
        text-align: center;

        &::before {
            content: "1";
            position: absolute;
            right: -10px;
            color: #ff0000;
            font-size: 12px;
        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        #dpr::before {
            content: "2";
        }
        .border_gradient {
            background-image: linear-gradient(to top, transparent 50%, var(--theme) 50%);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: top center;
            border-top: 0 none;
            padding-top: 1px;
        }

        .border_scale {
            position: relative;
            padding-top: 1px;
            border-top: 0 none;
        }
        .border_scale:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            border-top: 1px solid var(--theme);
            transform: scale(0.5);
            transform-origin: 0 0;
            box-sizing: border-box;
        }
        .border_base64 {
            padding-top: 1px;
            border-top: 0 none;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY5g5c+Z/BhAAABRcAsvqBShzAAAAAElFTkSuQmCC);
            background-position: 0 0;
            background-repeat: repeat-x;
            background-size: 1px 1px;
        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-device-pixel-ratio: 3) {

        #dpr::before {
            content: "3";
        }

        .border_gradient {
            background-image: linear-gradient(to top, transparent 66.66%, var(--theme) 66.66%);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: top center;
            border-top: 0 none;
            padding-top: 1px;
        }

        .border_scale {
            position: relative;
            padding-top: 1px;
            border-top: 0 none;
        }
        .border_scale:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border-top: 1px solid var(--theme);
            transform: scaleY(0.333);
            transform-origin: 0 0;
            box-sizing: border-box;
        }
        .border_base64 {
            padding-top: 1px;
            border-top: 0 none;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY5g5c+Z/BhAAABRcAsvqBShzAAAAAElFTkSuQmCC);
            background-position: 0 0;
            background-repeat: repeat-x;
            background-size: 1px 1px;
        }
    }
}
</style>
