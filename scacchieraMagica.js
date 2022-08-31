//creazione tabella vuota
	tabella=document.getElementById("tabella");
	var tabrutta=new String;//stringa di appoggio
	tabrutta="<table>";
	for(var i=1;i<9; i++)
	{
		tabrutta+="<tr>";
		for(var j=1; j<9; j++)
		{
			if((j%2==0)&&(i%2==0))
				tabrutta+="<td onClick='mossa("+i+""+j+")' id='"+i+""+j+"' class='arancione'><img src='imm/vuota.png'></td>";
			else if((j%2==1)&&(i%2==1))
				tabrutta+="<td onClick='mossa("+i+""+j+")' id='"+i+""+j+"' class='arancione'><img src='imm/vuota.png'></td>";
			else
				tabrutta+="<td onClick='mossa("+i+""+j+")' id='"+i+""+j+"' class='marrone'><img src='imm/vuota.png'></td>";

		}
		tabrutta+="</tr>";
	}
	tabrutta+="</table>";
	tabella.innerHTML=tabrutta;

//inserimento pedine
	//pedoni neri
	document.getElementById("21").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("22").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("23").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("24").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("25").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("26").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("27").innerHTML="<img src='imm/pedone_n.png'>";
	document.getElementById("28").innerHTML="<img src='imm/pedone_n.png'>";
	//pedoni bianchi
	document.getElementById("71").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("72").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("73").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("74").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("75").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("76").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("77").innerHTML="<img src='imm/pedone_b.png'>";
	document.getElementById("78").innerHTML="<img src='imm/pedone_b.png'>";
	//altre pedine nere
	document.getElementById("11").innerHTML="<img src='imm/torre_n.png'>";
	document.getElementById("18").innerHTML="<img src='imm/torre_n.png'>";
	document.getElementById("12").innerHTML="<img src='imm/cavallo_n.png'>";
	document.getElementById("17").innerHTML="<img src='imm/cavallo_n.png'>";
	document.getElementById("13").innerHTML="<img src='imm/alfiere_n.png'>";
	document.getElementById("16").innerHTML="<img src='imm/alfiere_n.png'>";
	document.getElementById("14").innerHTML="<img src='imm/regina_n.png'>";
	document.getElementById("15").innerHTML="<img src='imm/re_n.png'>";
	//altre pedine bianche
	document.getElementById("81").innerHTML="<img src='imm/torre_b.png'>";
	document.getElementById("88").innerHTML="<img src='imm/torre_b.png'>";
	document.getElementById("82").innerHTML="<img src='imm/cavallo_b.png'>";
	document.getElementById("87").innerHTML="<img src='imm/cavallo_b.png'>";
	document.getElementById("83").innerHTML="<img src='imm/alfiere_b.png'>";
	document.getElementById("86").innerHTML="<img src='imm/alfiere_b.png'>";
	document.getElementById("84").innerHTML="<img src='imm/regina_b.png'>";
	document.getElementById("85").innerHTML="<img src='imm/re_b.png'>";
