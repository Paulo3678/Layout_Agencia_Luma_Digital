let ja_contou = false;
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > ($('#provas').offset().top - 300)) {
        if (ja_contou == false) {
            const tempo_intervalo = 5;
            const tempo = 4000;

            $('.numero-contar').each(function() {
                let count_to = parseInt($(this).data('countTo'));
                let intervalos = tempo / tempo_intervalo;
                let incremento = count_to / intervalos;
                let valor = 0;
                let el = $(this);

                let timer = setInterval(function() {
                    if (valor >= count_to) {
                        valor = count_to;
                        clearInterval(timer);
                    }

                    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                    el.text(texto);
                    valor += incremento;
                }, tempo_intervalo);
            });
            ja_contou = true;
        }
    }
});