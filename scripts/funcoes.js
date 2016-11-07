// TESTE BATERIA
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
        }
        function createFile(dirEntry, fileName, isAppend) {
            // Creates a new file or returns the file if it already exists.
            dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

                writeFile(fileEntry, null, isAppend);

            }, onErrorCreateFile);

        }

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

// TESTE CRIAR PASTA

// MANTER A TELA EM MODO PAISAGEM
	function onLoad() {
	    document.addEventListener("deviceready", onDeviceReady, false);
	}

	function onDeviceReady() {
	    document.addEventListener("orientationChanged", updateOrientation);
	}

	function updateOrientation(e) {
	    switch (e.orientation) {
	        case 90:
	            navigator.screenOrientation.set('landscape');
	            break;
	        case -90:
	            navigator.screenOrientation.set('landscape');
	            break;
	    }
	}

//  TELA INICIAL
	//FUNÇÃO ABRIR TELA PROJETO

	// FUNÇÃO PLAYLIST

	// FUNÇÃO ABRIR
	
	
	// FUNÇÃO SAIR
	function sairApp(){
		if (navigator.app) {
			navigator.app.exitApp();
		}
		else if (navigator.device) {
		  navigator.device.exitApp();
		}
		else {
			window.open('','_self','');
			window.close();
		}
	}

// TELA PROJETO
	// FUNÇÃO SALVAR

	// FUNÇÃO ABRIR TELA PALCO
	$(document).ready(function() {
		$("#palco").click(function () {
			$(".menu-inicial-box").hide("fast");
			$(".projeto-box").hide("fast");
			$(".palco-box").show("fast");
		});
	});
	// FUNÇÃO ABRIR TELA INICIAL

	// FUNÇÃO SAIR

	// ADICIONAR PARTES DA MÚSICA
	var linhas;
	var colunas;
	par=1;
	ins=1;
	$(document).ready(function() {
            $(".add-partes").click(function () {
                $(".partes-lista").append("<th class='partes-th'><input type='text' placeholder='Parte' class='partes-li' name='partes'/></th>");
                colunas = $(".partes-li").length;
                $("input[name='partes']").attr("name","parte" + par);
                $("input[placeholder='Parte']").attr("placeholder","Parte " + par);
                // PARTES NA TELA PALCO
                $(".partes-palco-box").append("<div class='li-parte-box'><input type='text' class='li-parte' name='li-parte' readonly/></div>");
            	$("input[name='li-parte']").attr("name","li-parte" + par);

                par++;
                });
        });
	// ADICIONAR INSTRUMENTO
	$(document).ready(function() {
            $(".add-instrumentos").click(function () {
                $(".instrumento-lista").append("<li><input type='text' placeholder='Instrum.' class='instrumento' name='instrumento'/></li>");
                linhas = $(".instrumento").length; 
                $("input[name='instrumento']").attr("name","instrumento" + ins);
            	$("input[placeholder='Instrum.']").attr("placeholder","Instrum " + ins);
                //INSTRUMENTO NA TELA PALCO
                $(".volumes-box").append("<div class='volume-individual-box'><input type='text' class='volume-individual-texto' name='vol-instrumento' readonly/></div>");
            	$("input[name='vol-instrumento']").attr("name","vol-instrumento" + ins);

            	ins++

            });
        });
	// CRIA TABELA TRACKS
	var f = function(){
		if (linhas == null || colunas == null) {
			alert("Inserir ao menos 1 instrumento e 1 parte da música");
		} else {
			$(".tracks-botao").hide("fast");
	    	var tracks = document.createElement("table");
	    		tracks.setAttribute("class","tracks-table");
			document.body.appendChild(tracks);
			for(var cont = 0; cont < linhas; cont++) {
				var trx = document.createElement("tr");
				tracks.appendChild(trx);
				trx.setAttribute("class","trx");
				//alert("TR TR TR");
				for(var cont2 = 0; cont2 < colunas; cont2++) {
					var tdy = document.createElement("td");
					tdy.setAttribute("class","tdy");
					var txt = document.createElement("img");
						txt.setAttribute("src", "images/novo.png");
						txt.setAttribute("widith","35");
						txt.setAttribute("height", "35");
						txt.setAttribute("class","tracks-tr");
					trx.appendChild(tdy);
					tdy.appendChild(txt);
					//alert(" txt e td");
				}
			}
			$(".tracks-box").append(tracks); 
			$(".add-instrumentos").hide("fast"); // ESCONDE BOTÃO QUE ADICIONA INSTRUMENTOS
			$(".add-partes").hide("fast");       // ESCONDE BOTÃO QUE ADICIONA PARTES		
	}}
	// SINCRONIZAÇÃO SCROLL TABELAS
    $(document).ready(function()
    {
    $(".partes-box").scroll(function () { 
        $(".tracks-box").scrollLeft($(".partes-box").scrollLeft());
        });
    $(".instrumentos-box").scroll(function () { 
        $(".tracks-box").scrollTop($(".instrumentos-box").scrollTop());
        });
    $(".tracks-box").scroll(function(){
    	$(".partes-box").scrollLeft($(".tracks-box").scrollLeft());
    	$(".instrumentos-box").scrollTop($(".tracks-box").scrollTop());
    	});
    });


// TELA PALCO
	// FUNÇÃO ABRIR TELA INICIAL

	// FUNÇÃO ABRIR TELA PROJETO
	$(document).ready(function() {
		$("#projeto").click(function () {
			$(".menu-inicial-box").hide("fast");
			$(".projeto-box").show("fast");
			$(".palco-box").hide("fast");
		});
	});
	// FUNÇÃO MÚSICA ANTERIOR

	// FUNÇÃO PRÓXIMA MÚSICA

	// COPIA TITULO MÚSICA
	$(document).ready(function(){
		$(".titulo-musica-projeto").change(function(){
			$(".titulo-musica-palco").val($(".titulo-musica-projeto").val());
		});
	});
	// COPIA NOME PARTE
	$(document).ready(function(){
		$(".partes-box").change(function(){
			$("input[name='li-parte1']").val($("input[name='parte1']").val());
			$("input[name='li-parte2']").val($("input[name='parte2']").val());
			$("input[name='li-parte3']").val($("input[name='parte3']").val());
			$("input[name='li-parte4']").val($("input[name='parte4']").val());
			$("input[name='li-parte5']").val($("input[name='parte5']").val());
			$("input[name='li-parte6']").val($("input[name='parte6']").val());
			$("input[name='li-parte7']").val($("input[name='parte7']").val());
			$("input[name='li-parte8']").val($("input[name='parte8']").val());
			$("input[name='li-parte9']").val($("input[name='parte9']").val());
			$("input[name='li-parte10']").val($("input[name='parte10']").val());
		});	
	});
	// COPIA NOME INSTRUMENTO
	$(document).ready(function(){
		$(".instrumentos-box").change(function() {
			$("input[name='vol-instrumento1']").val($("input[name='instrumento1']").val());
			$("input[name='vol-instrumento2']").val($("input[name='instrumento2']").val());
			$("input[name='vol-instrumento3']").val($("input[name='instrumento3']").val());
			$("input[name='vol-instrumento4']").val($("input[name='instrumento4']").val());
			$("input[name='vol-instrumento5']").val($("input[name='instrumento5']").val());
			$("input[name='vol-instrumento6']").val($("input[name='instrumento6']").val());
			$("input[name='vol-instrumento7']").val($("input[name='instrumento7']").val());
			$("input[name='vol-instrumento8']").val($("input[name='instrumento8']").val());
			$("input[name='vol-instrumento9']").val($("input[name='instrumento9']").val());
			$("input[name='vol-instrumento10']").val($("input[name='instrumento10']").val());
			$("input[name='vol-instrumento11']").val($("input[name='instrumento11']").val());
			$("input[name='vol-instrumento12']").val($("input[name='instrumento12']").val());
			$("input[name='vol-instrumento13']").val($("input[name='instrumento13']").val());
			$("input[name='vol-instrumento14']").val($("input[name='instrumento14']").val());
			$("input[name='vol-instrumento15']").val($("input[name='instrumento15']").val());
		});
	});

