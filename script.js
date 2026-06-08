.hidden-card{
    opacity:0;
    transform:translateY(60px);
}

.visible{
    opacity:1;
    transform:translateY(0);
    transition:all 1s ease;
}

.petal{
    position:fixed;
    top:-50px;
    pointer-events:none;
    z-index:999;
    animation:fall linear forwards;
}

@keyframes fall{

    from{
        transform:
        translateY(-50px)
        rotate(0deg);
    }

    to{
        transform:
        translateY(110vh)
        rotate(720deg);
    }

}

.playing{
    animation:pulseMusic 2s infinite;
}

@keyframes pulseMusic{

    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.1);
    }

    100%{
        transform:scale(1);
    }
}
