$(document).ready(function(){
    $(".carousel-images").slick({
        autoplay:true,
    })

    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle()
    })

    $("#telefone").mask("(00)00000-0000")

    $("form").submit(function(e){
        e.preventDefault()
    })

    $("form").validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true,
            },
            telefone:{
                required:true
            },
            jogoInteresse:{
                required:true
            }
        },
        messages:{
        nome: "Por favor, insira seu nome",
        telefone:"Insira seu número de telefone com o DDD",
        email: "insira seu E-mail",
    },
    })

    $(".jogos button").click(function(){
        const nomeJogo = $(this).parent().find("h3").text()
        localStorage.setItem('jogoInteresse', nomeJogo);
        window.location.href = './pagamento.html';
        // $("#jogo-interesse").val(nomeJogo)

    })


    
})