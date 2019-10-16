import { Municipality } from './../../models/municipality';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-announce-freight',
  templateUrl: './announce-freight.component.html',
  styleUrls: ['./announce-freight.component.scss']
})
export class AnnounceFreightComponent implements OnInit {

  announceForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  private municipio: Municipality;
  myControl = new FormControl();

  public options: Municipality[] = 
  [
    {
      code: 23,
      name: "MONTELIBANO",
      depCode: 23
    },
    {
      code: 5001,
      name: "MEDELLIN",
      depCode: 5
    },
    {
      code: 5002,
      name: "ABEJORRAL",
      depCode: 5
    },
    {
      code: 5004,
      name: "ABRIAQUI",
      depCode: 5
    },
    {
      code: 5021,
      name: "ALEJANDRIA",
      depCode: 5
    },
    {
      code: 5030,
      name: "AMAGA",
      depCode: 5
    },
    {
      code: 5031,
      name: "AMALFI",
      depCode: 5
    },
    {
      code: 5034,
      name: "ANDES",
      depCode: 5
    },
    {
      code: 5036,
      name: "ANGELOPOLIS",
      depCode: 5
    },
    {
      code: 5038,
      name: "ANGOSTURA",
      depCode: 5
    },
    {
      code: 5040,
      name: "ANORI",
      depCode: 5
    },
    {
      code: 5042,
      name: "SANTAFE DE ANTIOQUIA",
      depCode: 5
    },
    {
      code: 5044,
      name: "ANZA",
      depCode: 5
    },
    {
      code: 5045,
      name: "APARTADO",
      depCode: 5
    },
    {
      code: 5051,
      name: "ARBOLETES",
      depCode: 5
    },
    {
      code: 5055,
      name: "ARGELIA",
      depCode: 5
    },
    {
      code: 5059,
      name: "ARMENIA",
      depCode: 5
    },
    {
      code: 5079,
      name: "BARBOSA",
      depCode: 5
    },
    {
      code: 5086,
      name: "BELMIRA",
      depCode: 5
    },
    {
      code: 5088,
      name: "BELLO",
      depCode: 5
    },
    {
      code: 5091,
      name: "BETANIA",
      depCode: 5
    },
    {
      code: 5093,
      name: "BETULIA",
      depCode: 5
    },
    {
      code: 5101,
      name: "CIUDAD BOLIVAR",
      depCode: 5
    },
    {
      code: 5107,
      name: "BRICENO",
      depCode: 5
    },
    {
      code: 5113,
      name: "BURITICA",
      depCode: 5
    },
    {
      code: 5120,
      name: "CACERES",
      depCode: 5
    },
    {
      code: 5125,
      name: "CAICEDO",
      depCode: 5
    },
    {
      code: 5129,
      name: "CALDAS",
      depCode: 5
    },
    {
      code: 5134,
      name: "CAMPAMENTO",
      depCode: 5
    },
    {
      code: 5138,
      name: "CANASGORDAS",
      depCode: 5
    },
    {
      code: 5142,
      name: "CARACOLI",
      depCode: 5
    },
    {
      code: 5145,
      name: "CARAMANTA",
      depCode: 5
    },
    {
      code: 5147,
      name: "CAREPA",
      depCode: 5
    },
    {
      code: 5148,
      name: "EL CARMEN DE VIBORAL",
      depCode: 5
    },
    {
      code: 5150,
      name: "CAROLINA",
      depCode: 5
    },
    {
      code: 5154,
      name: "CAUCASIA",
      depCode: 5
    },
    {
      code: 5172,
      name: "CHIGORODO",
      depCode: 5
    },
    {
      code: 5190,
      name: "CISNEROS",
      depCode: 5
    },
    {
      code: 5197,
      name: "COCORNA",
      depCode: 5
    },
    {
      code: 5206,
      name: "CONCEPCION",
      depCode: 5
    },
    {
      code: 5209,
      name: "CONCORDIA",
      depCode: 5
    },
    {
      code: 5212,
      name: "COPACABANA",
      depCode: 5
    },
    {
      code: 5234,
      name: "DABEIBA",
      depCode: 5
    },
    {
      code: 5237,
      name: "DON MATIAS",
      depCode: 5
    },
    {
      code: 5240,
      name: "EBEJICO",
      depCode: 5
    },
    {
      code: 5250,
      name: "EL BAGRE",
      depCode: 5
    },
    {
      code: 5264,
      name: "ENTRERRIOS",
      depCode: 5
    },
    {
      code: 5266,
      name: "ENVIGADO",
      depCode: 5
    },
    {
      code: 5282,
      name: "FREDONIA",
      depCode: 5
    },
    {
      code: 5284,
      name: "FRONTINO",
      depCode: 5
    },
    {
      code: 5306,
      name: "GIRALDO",
      depCode: 5
    },
    {
      code: 5308,
      name: "GIRARDOTA",
      depCode: 5
    },
    {
      code: 5310,
      name: "GOMEZ PLATA",
      depCode: 5
    },
    {
      code: 5313,
      name: "GRANADA",
      depCode: 5
    },
    {
      code: 5315,
      name: "GUADALUPE",
      depCode: 5
    },
    {
      code: 5318,
      name: "GUARNE",
      depCode: 5
    },
    {
      code: 5321,
      name: "GUATAPE",
      depCode: 5
    },
    {
      code: 5347,
      name: "HELICONIA",
      depCode: 5
    },
    {
      code: 5353,
      name: "HISPANIA",
      depCode: 5
    },
    {
      code: 5360,
      name: "ITAGUI",
      depCode: 5
    },
    {
      code: 5361,
      name: "ITUANGO",
      depCode: 5
    },
    {
      code: 5364,
      name: "JARDIN",
      depCode: 5
    },
    {
      code: 5368,
      name: "JERICO",
      depCode: 5
    },
    {
      code: 5376,
      name: "LA CEJA",
      depCode: 5
    },
    {
      code: 5380,
      name: "LA ESTRELLA",
      depCode: 5
    },
    {
      code: 5390,
      name: "LA PINTADA",
      depCode: 5
    },
    {
      code: 5400,
      name: "LA UNION",
      depCode: 5
    },
    {
      code: 5411,
      name: "LIBORINA",
      depCode: 5
    },
    {
      code: 5425,
      name: "MACEO",
      depCode: 5
    },
    {
      code: 5440,
      name: "MARINILLA",
      depCode: 5
    },
    {
      code: 5467,
      name: "MONTEBELLO",
      depCode: 5
    },
    {
      code: 5475,
      name: "MURINDO",
      depCode: 5
    },
    {
      code: 5480,
      name: "MUTATA",
      depCode: 5
    },
    {
      code: 5483,
      name: "NARINO",
      depCode: 5
    },
    {
      code: 5490,
      name: "NECOCLI",
      depCode: 5
    },
    {
      code: 5495,
      name: "NECHI",
      depCode: 5
    },
    {
      code: 5501,
      name: "OLAYA",
      depCode: 5
    },
    {
      code: 5541,
      name: "PENOL",
      depCode: 5
    },
    {
      code: 5543,
      name: "PEQUE",
      depCode: 5
    },
    {
      code: 5576,
      name: "PUEBLORRICO",
      depCode: 5
    },
    {
      code: 5579,
      name: "PUERTO BERRIO",
      depCode: 5
    },
    {
      code: 5585,
      name: "PUERTO NARE",
      depCode: 5
    },
    {
      code: 5591,
      name: "PUERTO TRIUNFO",
      depCode: 5
    },
    {
      code: 5604,
      name: "REMEDIOS",
      depCode: 5
    },
    {
      code: 5607,
      name: "RETIRO",
      depCode: 5
    },
    {
      code: 5615,
      name: "RIONEGRO",
      depCode: 5
    },
    {
      code: 5628,
      name: "SABANALARGA",
      depCode: 5
    },
    {
      code: 5631,
      name: "SABANETA",
      depCode: 5
    },
    {
      code: 5642,
      name: "SALGAR",
      depCode: 5
    },
    {
      code: 5647,
      name: "SAN ANDRES DE CUERQUIA",
      depCode: 5
    },
    {
      code: 5649,
      name: "SAN CARLOS",
      depCode: 5
    },
    {
      code: 5652,
      name: "SAN FRANCISCO",
      depCode: 5
    },
    {
      code: 5656,
      name: "SAN JERONIMO",
      depCode: 5
    },
    {
      code: 5658,
      name: "SAN JOSE DE LA MONTANA",
      depCode: 5
    },
    {
      code: 5659,
      name: "SAN JUAN DE URABA",
      depCode: 5
    },
    {
      code: 5660,
      name: "SAN LUIS",
      depCode: 5
    },
    {
      code: 5664,
      name: "SAN PEDRO",
      depCode: 5
    },
    {
      code: 5665,
      name: "SAN PEDRO DE URABA",
      depCode: 5
    },
    {
      code: 5667,
      name: "SAN RAFAEL",
      depCode: 5
    },
    {
      code: 5670,
      name: "SAN ROQUE",
      depCode: 5
    },
    {
      code: 5674,
      name: "SAN VICENTE",
      depCode: 5
    },
    {
      code: 5679,
      name: "SANTA BARBARA",
      depCode: 5
    },
    {
      code: 5686,
      name: "SANTA ROSA DE OSOS",
      depCode: 5
    },
    {
      code: 5690,
      name: "SANTO DOMINGO",
      depCode: 5
    },
    {
      code: 5697,
      name: "EL SANTUARIO",
      depCode: 5
    },
    {
      code: 5736,
      name: "SEGOVIA",
      depCode: 5
    },
    {
      code: 5756,
      name: "SONSON",
      depCode: 5
    },
    {
      code: 5761,
      name: "SOPETRAN",
      depCode: 5
    },
    {
      code: 5789,
      name: "TAMESIS",
      depCode: 5
    },
    {
      code: 5790,
      name: "TARAZA",
      depCode: 5
    },
    {
      code: 5792,
      name: "TARSO",
      depCode: 5
    },
    {
      code: 5809,
      name: "TITIRIBI",
      depCode: 5
    },
    {
      code: 5819,
      name: "TOLEDO",
      depCode: 5
    },
    {
      code: 5837,
      name: "TURBO",
      depCode: 5
    },
    {
      code: 5842,
      name: "URAMITA",
      depCode: 5
    },
    {
      code: 5847,
      name: "URRAO",
      depCode: 5
    },
    {
      code: 5854,
      name: "VALDIVIA",
      depCode: 5
    },
    {
      code: 5856,
      name: "VALPARAISO",
      depCode: 5
    },
    {
      code: 5858,
      name: "VEGACHI",
      depCode: 5
    },
    {
      code: 5861,
      name: "VENECIA",
      depCode: 5
    },
    {
      code: 5873,
      name: "VIGIA DEL FUERTE",
      depCode: 5
    },
    {
      code: 5885,
      name: "YALI",
      depCode: 5
    },
    {
      code: 5887,
      name: "YARUMAL",
      depCode: 5
    },
    {
      code: 5890,
      name: "YOLOMBO",
      depCode: 5
    },
    {
      code: 5893,
      name: "YONDO",
      depCode: 5
    },
    {
      code: 5895,
      name: "ZARAGOZA",
      depCode: 5
    },
    {
      code: 8001,
      name: "BARRANQUILLA",
      depCode: 8
    },
    {
      code: 8078,
      name: "BARANOA",
      depCode: 8
    },
    {
      code: 8137,
      name: "CAMPO DE LA CRUZ",
      depCode: 8
    },
    {
      code: 8141,
      name: "CANDELARIA",
      depCode: 8
    },
    {
      code: 8296,
      name: "GALAPA",
      depCode: 8
    },
    {
      code: 8372,
      name: "JUAN DE ACOSTA",
      depCode: 8
    },
    {
      code: 8421,
      name: "LURUACO",
      depCode: 8
    },
    {
      code: 8433,
      name: "MALAMBO",
      depCode: 8
    },
    {
      code: 8436,
      name: "MANATI",
      depCode: 8
    },
    {
      code: 8520,
      name: "PALMAR DE VARELA",
      depCode: 8
    },
    {
      code: 8549,
      name: "PIOJO",
      depCode: 8
    },
    {
      code: 8558,
      name: "POLONUEVO",
      depCode: 8
    },
    {
      code: 8560,
      name: "PONEDERA",
      depCode: 8
    },
    {
      code: 8573,
      name: "PUERTO COLOMBIA",
      depCode: 8
    },
    {
      code: 8606,
      name: "REPELON",
      depCode: 8
    },
    {
      code: 8634,
      name: "SABANAGRANDE",
      depCode: 8
    },
    {
      code: 8638,
      name: "SABANALARGA",
      depCode: 8
    },
    {
      code: 8675,
      name: "SANTA LUCIA",
      depCode: 8
    },
    {
      code: 8685,
      name: "SANTO TOMAS",
      depCode: 8
    },
    {
      code: 8758,
      name: "SOLEDAD",
      depCode: 8
    },
    {
      code: 8770,
      name: "SUAN",
      depCode: 8
    },
    {
      code: 8832,
      name: "TUBARA",
      depCode: 8
    },
    {
      code: 8849,
      name: "USIACURI",
      depCode: 8
    },
    {
      code: 11001,
      name: "BOGOTA, DISTRITO CAPITAL",
      depCode: 11
    },
    {
      code: 13001,
      name: "CARTAGENA",
      depCode: 13
    },
    {
      code: 13006,
      name: "ACHI",
      depCode: 13
    },
    {
      code: 13030,
      name: "ALTOS DEL ROSARIO",
      depCode: 13
    },
    {
      code: 13042,
      name: "ARENAL",
      depCode: 13
    },
    {
      code: 13052,
      name: "ARJONA",
      depCode: 13
    },
    {
      code: 13062,
      name: "ARROYOHONDO",
      depCode: 13
    },
    {
      code: 13074,
      name: "BARRANCO DE LOBA",
      depCode: 13
    },
    {
      code: 13140,
      name: "CALAMAR",
      depCode: 13
    },
    {
      code: 13160,
      name: "CANTAGALLO",
      depCode: 13
    },
    {
      code: 13188,
      name: "CICUCO",
      depCode: 13
    },
    {
      code: 13212,
      name: "CORDOBA",
      depCode: 13
    },
    {
      code: 13222,
      name: "CLEMENCIA",
      depCode: 13
    },
    {
      code: 13244,
      name: "EL CARMEN DE BOLIVAR",
      depCode: 13
    },
    {
      code: 13248,
      name: "EL GUAMO",
      depCode: 13
    },
    {
      code: 13268,
      name: "EL PENON",
      depCode: 13
    },
    {
      code: 13300,
      name: "HATILLO DE LOBA",
      depCode: 13
    },
    {
      code: 13430,
      name: "MAGANGUE",
      depCode: 13
    },
    {
      code: 13433,
      name: "MAHATES",
      depCode: 13
    },
    {
      code: 13440,
      name: "MARGARITA",
      depCode: 13
    },
    {
      code: 13442,
      name: "MARIA LA BAJA",
      depCode: 13
    },
    {
      code: 13458,
      name: "MONTECRISTO",
      depCode: 13
    },
    {
      code: 13468,
      name: "MOMPOS",
      depCode: 13
    },
    {
      code: 13473,
      name: "MORALES",
      depCode: 13
    },
    {
      code: 13549,
      name: "PINILLOS",
      depCode: 13
    },
    {
      code: 13580,
      name: "REGIDOR",
      depCode: 13
    },
    {
      code: 13600,
      name: "RIO VIEJO",
      depCode: 13
    },
    {
      code: 13620,
      name: "SAN CRISTOBAL",
      depCode: 13
    },
    {
      code: 13647,
      name: "SAN ESTANISLAO",
      depCode: 13
    },
    {
      code: 13650,
      name: "SAN FERNANDO",
      depCode: 13
    },
    {
      code: 13654,
      name: "SAN JACINTO",
      depCode: 13
    },
    {
      code: 13655,
      name: "SAN JACINTO DEL CAUCA",
      depCode: 13
    },
    {
      code: 13657,
      name: "SAN JUAN NEPOMUCENO",
      depCode: 13
    },
    {
      code: 13667,
      name: "SAN MARTIN DE LOBA",
      depCode: 13
    },
    {
      code: 13670,
      name: "SAN PABLO",
      depCode: 13
    },
    {
      code: 13673,
      name: "SANTA CATALINA",
      depCode: 13
    },
    {
      code: 13683,
      name: "SANTA ROSA",
      depCode: 13
    },
    {
      code: 13688,
      name: "SANTA ROSA DEL SUR",
      depCode: 13
    },
    {
      code: 13744,
      name: "SIMITI",
      depCode: 13
    },
    {
      code: 13760,
      name: "SOPLAVIENTO",
      depCode: 13
    },
    {
      code: 13780,
      name: "TALAIGUA NUEVO",
      depCode: 13
    },
    {
      code: 13810,
      name: "TIQUISIO",
      depCode: 13
    },
    {
      code: 13836,
      name: "TURBACO",
      depCode: 13
    },
    {
      code: 13838,
      name: "TURBANA",
      depCode: 13
    },
    {
      code: 13873,
      name: "VILLANUEVA",
      depCode: 13
    },
    {
      code: 13894,
      name: "ZAMBRANO",
      depCode: 13
    },
    {
      code: 15001,
      name: "TUNJA",
      depCode: 15
    },
    {
      code: 15022,
      name: "ALMEIDA",
      depCode: 15
    },
    {
      code: 15047,
      name: "AQUITANIA",
      depCode: 15
    },
    {
      code: 15051,
      name: "ARCABUCO",
      depCode: 15
    },
    {
      code: 15087,
      name: "BELEN",
      depCode: 15
    },
    {
      code: 15090,
      name: "BERBEO",
      depCode: 15
    },
    {
      code: 15092,
      name: "BETEITIVA",
      depCode: 15
    },
    {
      code: 15097,
      name: "BOAVITA",
      depCode: 15
    },
    {
      code: 15104,
      name: "BOYACA",
      depCode: 15
    },
    {
      code: 15106,
      name: "BRICENO",
      depCode: 15
    },
    {
      code: 15109,
      name: "BUENAVISTA",
      depCode: 15
    },
    {
      code: 15114,
      name: "BUSBANZA",
      depCode: 15
    },
    {
      code: 15131,
      name: "CALDAS",
      depCode: 15
    },
    {
      code: 15135,
      name: "CAMPOHERMOSO",
      depCode: 15
    },
    {
      code: 15162,
      name: "CERINZA",
      depCode: 15
    },
    {
      code: 15172,
      name: "CHINAVITA",
      depCode: 15
    },
    {
      code: 15176,
      name: "CHIQUINQUIRA",
      depCode: 15
    },
    {
      code: 15180,
      name: "CHISCAS",
      depCode: 15
    },
    {
      code: 15183,
      name: "CHITA",
      depCode: 15
    },
    {
      code: 15185,
      name: "CHITARAQUE",
      depCode: 15
    },
    {
      code: 15187,
      name: "CHIVATA",
      depCode: 15
    },
    {
      code: 15189,
      name: "CIENEGA",
      depCode: 15
    },
    {
      code: 15204,
      name: "COMBITA",
      depCode: 15
    },
    {
      code: 15212,
      name: "COPER",
      depCode: 15
    },
    {
      code: 15215,
      name: "CORRALES",
      depCode: 15
    },
    {
      code: 15218,
      name: "COVARACHIA",
      depCode: 15
    },
    {
      code: 15223,
      name: "CUBARA",
      depCode: 15
    },
    {
      code: 15224,
      name: "CUCAITA",
      depCode: 15
    },
    {
      code: 15226,
      name: "CUITIVA",
      depCode: 15
    },
    {
      code: 15232,
      name: "CHIQUIZA",
      depCode: 15
    },
    {
      code: 15236,
      name: "CHIVOR",
      depCode: 15
    },
    {
      code: 15238,
      name: "DUITAMA",
      depCode: 15
    },
    {
      code: 15244,
      name: "EL COCUY",
      depCode: 15
    },
    {
      code: 15248,
      name: "EL ESPINO",
      depCode: 15
    },
    {
      code: 15272,
      name: "FIRAVITOBA",
      depCode: 15
    },
    {
      code: 15276,
      name: "FLORESTA",
      depCode: 15
    },
    {
      code: 15293,
      name: "GACHANTIVA",
      depCode: 15
    },
    {
      code: 15296,
      name: "GAMEZA",
      depCode: 15
    },
    {
      code: 15299,
      name: "GARAGOA",
      depCode: 15
    },
    {
      code: 15317,
      name: "GUACAMAYAS",
      depCode: 15
    },
    {
      code: 15322,
      name: "GUATEQUE",
      depCode: 15
    },
    {
      code: 15325,
      name: "GUAYATA",
      depCode: 15
    },
    {
      code: 15332,
      name: "GU?ICAN",
      depCode: 15
    },
    {
      code: null,
      name: "GUICAN",
      depCode: 15
    },
    {
      code: 15362,
      name: "IZA",
      depCode: 15
    },
    {
      code: 15367,
      name: "JENESANO",
      depCode: 15
    },
    {
      code: 15368,
      name: "JERICO",
      depCode: 15
    },
    {
      code: 15377,
      name: "LABRANZAGRANDE",
      depCode: 15
    },
    {
      code: 15380,
      name: "LA CAPILLA",
      depCode: 15
    },
    {
      code: 15401,
      name: "LA VICTORIA",
      depCode: 15
    },
    {
      code: 15403,
      name: "LA UVITA",
      depCode: 15
    },
    {
      code: 15407,
      name: "VILLA DE LEYVA",
      depCode: 15
    },
    {
      code: 15425,
      name: "MACANAL",
      depCode: 15
    },
    {
      code: 15442,
      name: "MARIPI",
      depCode: 15
    },
    {
      code: 15455,
      name: "MIRAFLORES",
      depCode: 15
    },
    {
      code: 15464,
      name: "MONGUA",
      depCode: 15
    },
    {
      code: 15466,
      name: "MONGUI",
      depCode: 15
    },
    {
      code: 15469,
      name: "MONIQUIRA",
      depCode: 15
    },
    {
      code: 15476,
      name: "MOTAVITA",
      depCode: 15
    },
    {
      code: 15480,
      name: "MUZO",
      depCode: 15
    },
    {
      code: 15491,
      name: "NOBSA",
      depCode: 15
    },
    {
      code: 15494,
      name: "NUEVO COLON",
      depCode: 15
    },
    {
      code: 15500,
      name: "OICATA",
      depCode: 15
    },
    {
      code: 15507,
      name: "OTANCHE",
      depCode: 15
    },
    {
      code: 15511,
      name: "PACHAVITA",
      depCode: 15
    },
    {
      code: 15514,
      name: "PAEZ",
      depCode: 15
    },
    {
      code: 15516,
      name: "PAIPA",
      depCode: 15
    },
    {
      code: 15518,
      name: "PAJARITO",
      depCode: 15
    },
    {
      code: 15522,
      name: "PANQUEBA",
      depCode: 15
    },
    {
      code: 15531,
      name: "PAUNA",
      depCode: 15
    },
    {
      code: 15533,
      name: "PAYA",
      depCode: 15
    },
    {
      code: 15537,
      name: "PAZ DE RIO",
      depCode: 15
    },
    {
      code: 15542,
      name: "PESCA",
      depCode: 15
    },
    {
      code: 15550,
      name: "PISBA",
      depCode: 15
    },
    {
      code: 15572,
      name: "PUERTO BOYACA",
      depCode: 15
    },
    {
      code: 15580,
      name: "QUIPAMA",
      depCode: 15
    },
    {
      code: 15599,
      name: "RAMIRIQUI",
      depCode: 15
    },
    {
      code: 15600,
      name: "RAQUIRA",
      depCode: 15
    },
    {
      code: 15621,
      name: "RONDON",
      depCode: 15
    },
    {
      code: 15632,
      name: "SABOYA",
      depCode: 15
    },
    {
      code: 15638,
      name: "SACHICA",
      depCode: 15
    },
    {
      code: 15646,
      name: "SAMACA",
      depCode: 15
    },
    {
      code: 15660,
      name: "SAN EDUARDO",
      depCode: 15
    },
    {
      code: 15664,
      name: "SAN JOSE DE PARE",
      depCode: 15
    },
    {
      code: 15667,
      name: "SAN LUIS DE GACENO",
      depCode: 15
    },
    {
      code: 15673,
      name: "SAN MATEO",
      depCode: 15
    },
    {
      code: 15676,
      name: "SAN MIGUEL DE SEMA",
      depCode: 15
    },
    {
      code: 15681,
      name: "SAN PABLO DE BORBUR",
      depCode: 15
    },
    {
      code: 15686,
      name: "SANTANA",
      depCode: 15
    },
    {
      code: 15690,
      name: "SANTA MARIA",
      depCode: 15
    },
    {
      code: 15693,
      name: "SANTA ROSA DE VITERBO",
      depCode: 15
    },
    {
      code: 15696,
      name: "SANTA SOFIA",
      depCode: 15
    },
    {
      code: 15720,
      name: "SATIVANORTE",
      depCode: 15
    },
    {
      code: 15723,
      name: "SATIVASUR",
      depCode: 15
    },
    {
      code: 15740,
      name: "SIACHOQUE",
      depCode: 15
    },
    {
      code: 15753,
      name: "SOATA",
      depCode: 15
    },
    {
      code: 15755,
      name: "SOCOTA",
      depCode: 15
    },
    {
      code: 15757,
      name: "SOCHA",
      depCode: 15
    },
    {
      code: 15759,
      name: "SOGAMOSO",
      depCode: 15
    },
    {
      code: 15761,
      name: "SOMONDOCO",
      depCode: 15
    },
    {
      code: 15762,
      name: "SORA",
      depCode: 15
    },
    {
      code: 15763,
      name: "SOTAQUIRA",
      depCode: 15
    },
    {
      code: 15764,
      name: "SORACA",
      depCode: 15
    },
    {
      code: 15774,
      name: "SUSACON",
      depCode: 15
    },
    {
      code: 15776,
      name: "SUTAMARCHAN",
      depCode: 15
    },
    {
      code: 15778,
      name: "SUTATENZA",
      depCode: 15
    },
    {
      code: 15790,
      name: "TASCO",
      depCode: 15
    },
    {
      code: 15798,
      name: "TENZA",
      depCode: 15
    },
    {
      code: 15804,
      name: "TIBANA",
      depCode: 15
    },
    {
      code: 15806,
      name: "TIBASOSA",
      depCode: 15
    },
    {
      code: 15808,
      name: "TINJACA",
      depCode: 15
    },
    {
      code: 15810,
      name: "TIPACOQUE",
      depCode: 15
    },
    {
      code: 15814,
      name: "TOCA",
      depCode: 15
    },
    {
      code: 15816,
      name: "TOGUI",
      depCode: 15
    },
    {
      code: 15820,
      name: "TOPAGA",
      depCode: 15
    },
    {
      code: 15822,
      name: "TOTA",
      depCode: 15
    },
    {
      code: 15832,
      name: "TUNUNGUA",
      depCode: 15
    },
    {
      code: 15835,
      name: "TURMEQUE",
      depCode: 15
    },
    {
      code: 15837,
      name: "TUTA",
      depCode: 15
    },
    {
      code: 15839,
      name: "TUTAZA",
      depCode: 15
    },
    {
      code: 15842,
      name: "UMBITA",
      depCode: 15
    },
    {
      code: 15861,
      name: "VENTAQUEMADA",
      depCode: 15
    },
    {
      code: 15879,
      name: "VIRACACHA",
      depCode: 15
    },
    {
      code: 15897,
      name: "ZETAQUIRA",
      depCode: 15
    },
    {
      code: 17001,
      name: "MANIZALES",
      depCode: 17
    },
    {
      code: 17013,
      name: "AGUADAS",
      depCode: 17
    },
    {
      code: 17042,
      name: "ANSERMA",
      depCode: 17
    },
    {
      code: 17050,
      name: "ARANZAZU",
      depCode: 17
    },
    {
      code: 17088,
      name: "BELALCAZAR",
      depCode: 17
    },
    {
      code: 17174,
      name: "CHINCHINA",
      depCode: 17
    },
    {
      code: 17272,
      name: "FILADELFIA",
      depCode: 17
    },
    {
      code: 17380,
      name: "LA DORADA",
      depCode: 17
    },
    {
      code: 17388,
      name: "LA MERCED",
      depCode: 17
    },
    {
      code: 17433,
      name: "MANZANARES",
      depCode: 17
    },
    {
      code: 17442,
      name: "MARMATO",
      depCode: 17
    },
    {
      code: 17444,
      name: "MARQUETALIA",
      depCode: 17
    },
    {
      code: 17446,
      name: "MARULANDA",
      depCode: 17
    },
    {
      code: 17486,
      name: "NEIRA",
      depCode: 17
    },
    {
      code: 17495,
      name: "NORCASIA",
      depCode: 17
    },
    {
      code: 17513,
      name: "PACORA",
      depCode: 17
    },
    {
      code: 17524,
      name: "PALESTINA",
      depCode: 17
    },
    {
      code: 17541,
      name: "PENSILVANIA",
      depCode: 17
    },
    {
      code: 17614,
      name: "RIOSUCIO",
      depCode: 17
    },
    {
      code: 17616,
      name: "RISARALDA",
      depCode: 17
    },
    {
      code: 17653,
      name: "SALAMINA",
      depCode: 17
    },
    {
      code: 17662,
      name: "SAMANA",
      depCode: 17
    },
    {
      code: 17665,
      name: "SAN JOSE",
      depCode: 17
    },
    {
      code: 17777,
      name: "SUPIA",
      depCode: 17
    },
    {
      code: 17867,
      name: "VICTORIA",
      depCode: 17
    },
    {
      code: 17873,
      name: "VILLAMARIA",
      depCode: 17
    },
    {
      code: 17877,
      name: "VITERBO",
      depCode: 17
    },
    {
      code: 18001,
      name: "FLORENCIA",
      depCode: 18
    },
    {
      code: 18029,
      name: "ALBANIA",
      depCode: 18
    },
    {
      code: 18094,
      name: "BELEN DE LOS ANDAQUIES",
      depCode: 18
    },
    {
      code: 18150,
      name: "CARTAGENA DEL CHAIRA",
      depCode: 18
    },
    {
      code: 18205,
      name: "CURILLO",
      depCode: 18
    },
    {
      code: 18247,
      name: "EL DONCELLO",
      depCode: 18
    },
    {
      code: 18256,
      name: "EL PAUJIL",
      depCode: 18
    },
    {
      code: 18410,
      name: "LA MONTANITA",
      depCode: 18
    },
    {
      code: 18460,
      name: "MILAN",
      depCode: 18
    },
    {
      code: 18479,
      name: "MORELIA",
      depCode: 18
    },
    {
      code: 18592,
      name: "PUERTO RICO",
      depCode: 18
    },
    {
      code: 18610,
      name: "SAN JOSE DE LA FRAGUA",
      depCode: 18
    },
    {
      code: 18753,
      name: "SAN VICENTE DEL CAGUAN",
      depCode: 18
    },
    {
      code: 18756,
      name: "SOLANO",
      depCode: 18
    },
    {
      code: 18785,
      name: "SOLITA",
      depCode: 18
    },
    {
      code: 18860,
      name: "VALPARAISO",
      depCode: 18
    },
    {
      code: 19001,
      name: "POPAYAN",
      depCode: 19
    },
    {
      code: 19022,
      name: "ALMAGUER",
      depCode: 19
    },
    {
      code: 19050,
      name: "ARGELIA",
      depCode: 19
    },
    {
      code: 19075,
      name: "BALBOA",
      depCode: 19
    },
    {
      code: 19100,
      name: "BOLIVAR",
      depCode: 19
    },
    {
      code: 19110,
      name: "BUENOS AIRES",
      depCode: 19
    },
    {
      code: 19130,
      name: "CAJIBIO",
      depCode: 19
    },
    {
      code: 19137,
      name: "CALDONO",
      depCode: 19
    },
    {
      code: 19142,
      name: "CALOTO",
      depCode: 19
    },
    {
      code: 19212,
      name: "CORINTO",
      depCode: 19
    },
    {
      code: 19256,
      name: "EL TAMBO",
      depCode: 19
    },
    {
      code: 19290,
      name: "FLORENCIA",
      depCode: 19
    },
    {
      code: 19300,
      name: "GUACHENE",
      depCode: 19
    },
    {
      code: 19318,
      name: "GUAPI",
      depCode: 19
    },
    {
      code: 19355,
      name: "INZA",
      depCode: 19
    },
    {
      code: 19364,
      name: "JAMBALO",
      depCode: 19
    },
    {
      code: 19392,
      name: "LA SIERRA",
      depCode: 19
    },
    {
      code: 19397,
      name: "LA VEGA",
      depCode: 19
    },
    {
      code: 19418,
      name: "LOPEZ",
      depCode: 19
    },
    {
      code: 19450,
      name: "MERCADERES",
      depCode: 19
    },
    {
      code: 19455,
      name: "MIRANDA",
      depCode: 19
    },
    {
      code: 19473,
      name: "MORALES",
      depCode: 19
    },
    {
      code: 19513,
      name: "PADILLA",
      depCode: 19
    },
    {
      code: 19517,
      name: "PAEZ",
      depCode: 19
    },
    {
      code: 19532,
      name: "PATIA",
      depCode: 19
    },
    {
      code: 19533,
      name: "PIAMONTE",
      depCode: 19
    },
    {
      code: 19548,
      name: "PIENDAMO",
      depCode: 19
    },
    {
      code: 19573,
      name: "PUERTO TEJADA",
      depCode: 19
    },
    {
      code: 19585,
      name: "PURACE",
      depCode: 19
    },
    {
      code: 19622,
      name: "ROSAS",
      depCode: 19
    },
    {
      code: 19693,
      name: "SAN SEBASTIAN",
      depCode: 19
    },
    {
      code: 19698,
      name: "SANTANDER DE QUILICHAO",
      depCode: 19
    },
    {
      code: 19701,
      name: "SANTA ROSA",
      depCode: 19
    },
    {
      code: 19743,
      name: "SILVIA",
      depCode: 19
    },
    {
      code: 19760,
      name: "SOTARA",
      depCode: 19
    },
    {
      code: 19780,
      name: "SUAREZ",
      depCode: 19
    },
    {
      code: 19785,
      name: "SUCRE",
      depCode: 19
    },
    {
      code: 19807,
      name: "TIMBIO",
      depCode: 19
    },
    {
      code: 19809,
      name: "TIMBIQUI",
      depCode: 19
    },
    {
      code: 19821,
      name: "TORIBIO",
      depCode: 19
    },
    {
      code: 19824,
      name: "TOTORO",
      depCode: 19
    },
    {
      code: 19845,
      name: "VILLA RICA",
      depCode: 19
    },
    {
      code: 20001,
      name: "VALLEDUPAR",
      depCode: 20
    },
    {
      code: 20011,
      name: "AGUACHICA",
      depCode: 20
    },
    {
      code: 20013,
      name: "AGUSTIN CODAZZI",
      depCode: 20
    },
    {
      code: 20032,
      name: "ASTREA",
      depCode: 20
    },
    {
      code: 20045,
      name: "BECERRIL",
      depCode: 20
    },
    {
      code: 20060,
      name: "BOSCONIA",
      depCode: 20
    },
    {
      code: 20175,
      name: "CHIMICHAGUA",
      depCode: 20
    },
    {
      code: 20178,
      name: "CHIRIGUANA",
      depCode: 20
    },
    {
      code: 20228,
      name: "CURUMANI",
      depCode: 20
    },
    {
      code: 20238,
      name: "EL COPEY",
      depCode: 20
    },
    {
      code: 20250,
      name: "EL PASO",
      depCode: 20
    },
    {
      code: 20295,
      name: "GAMARRA",
      depCode: 20
    },
    {
      code: 20310,
      name: "GONZALEZ",
      depCode: 20
    },
    {
      code: 20383,
      name: "LA GLORIA",
      depCode: 20
    },
    {
      code: 20400,
      name: "LA JAGUA DE IBIRICO",
      depCode: 20
    },
    {
      code: 20443,
      name: "MANAURE",
      depCode: 20
    },
    {
      code: 20517,
      name: "PAILITAS",
      depCode: 20
    },
    {
      code: 20550,
      name: "PELAYA",
      depCode: 20
    },
    {
      code: 20570,
      name: "PUEBLO BELLO",
      depCode: 20
    },
    {
      code: 20614,
      name: "RIO DE ORO",
      depCode: 20
    },
    {
      code: 20621,
      name: "LA PAZ",
      depCode: 20
    },
    {
      code: 20710,
      name: "SAN ALBERTO",
      depCode: 20
    },
    {
      code: 20750,
      name: "SAN DIEGO",
      depCode: 20
    },
    {
      code: 20770,
      name: "SAN MARTIN",
      depCode: 20
    },
    {
      code: 20787,
      name: "TAMALAMEQUE",
      depCode: 20
    },
    {
      code: 23001,
      name: "MONTERIA",
      depCode: 23
    },
    {
      code: 23068,
      name: "AYAPEL",
      depCode: 23
    },
    {
      code: 23079,
      name: "BUENAVISTA",
      depCode: 23
    },
    {
      code: 23090,
      name: "CANALETE",
      depCode: 23
    },
    {
      code: 23162,
      name: "CERETE",
      depCode: 23
    },
    {
      code: 23168,
      name: "CHIMA",
      depCode: 23
    },
    {
      code: 23182,
      name: "CHINU",
      depCode: 23
    },
    {
      code: 23189,
      name: "CIENAGA DE ORO",
      depCode: 23
    },
    {
      code: 23300,
      name: "COTORRA",
      depCode: 23
    },
    {
      code: 23350,
      name: "LA APARTADA",
      depCode: 23
    },
    {
      code: 23417,
      name: "LORICA",
      depCode: 23
    },
    {
      code: 23419,
      name: "LOS CORDOBAS",
      depCode: 23
    },
    {
      code: 23464,
      name: "MOMIL",
      depCode: 23
    },
    {
      code: 23466,
      name: "MONTELIBANO",
      depCode: 23
    },
    {
      code: 23500,
      name: "MONITOS",
      depCode: 23
    },
    {
      code: 23555,
      name: "PLANETA RICA",
      depCode: 23
    },
    {
      code: 23570,
      name: "PUEBLO NUEVO",
      depCode: 23
    },
    {
      code: 23574,
      name: "PUERTO ESCONDIDO",
      depCode: 23
    },
    {
      code: 23580,
      name: "PUERTO LIBERTADOR",
      depCode: 23
    },
    {
      code: 23586,
      name: "PURISIMA",
      depCode: 23
    },
    {
      code: 23660,
      name: "SAHAGUN",
      depCode: 23
    },
    {
      code: 23670,
      name: "SAN ANDRES DE SOTAVENTO",
      depCode: 23
    },
    {
      code: 23672,
      name: "SAN ANTERO",
      depCode: 23
    },
    {
      code: 23675,
      name: "SAN BERNARDO DEL VIENTO",
      depCode: 23
    },
    {
      code: 23678,
      name: "SAN CARLOS",
      depCode: 23
    },
    {
      code: 23682,
      name: "SAN JOSE DE URE",
      depCode: 23
    },
    {
      code: 23686,
      name: "SAN PELAYO",
      depCode: 23
    },
    {
      code: 23807,
      name: "TIERRALTA",
      depCode: 23
    },
    {
      code: 23815,
      name: "TUCH�N",
      depCode: 23
    },
    {
      code: 23855,
      name: "VALENCIA",
      depCode: 23
    },
    {
      code: 25001,
      name: "AGUA DE DIOS",
      depCode: 25
    },
    {
      code: 25019,
      name: "ALBAN",
      depCode: 25
    },
    {
      code: 25035,
      name: "ANAPOIMA",
      depCode: 25
    },
    {
      code: 25040,
      name: "ANOLAIMA",
      depCode: 25
    },
    {
      code: 25053,
      name: "ARBELAEZ",
      depCode: 25
    },
    {
      code: 25086,
      name: "BELTRAN",
      depCode: 25
    },
    {
      code: 25095,
      name: "BITUIMA",
      depCode: 25
    },
    {
      code: 25099,
      name: "BOJACA",
      depCode: 25
    },
    {
      code: 25120,
      name: "CABRERA",
      depCode: 25
    },
    {
      code: 25123,
      name: "CACHIPAY",
      depCode: 25
    },
    {
      code: 25126,
      name: "CAJICA",
      depCode: 25
    },
    {
      code: 25148,
      name: "CAPARRAPI",
      depCode: 25
    },
    {
      code: 25151,
      name: "CAQUEZA",
      depCode: 25
    },
    {
      code: 25154,
      name: "CARMEN DE CARUPA",
      depCode: 25
    },
    {
      code: 25168,
      name: "CHAGUANI",
      depCode: 25
    },
    {
      code: 25175,
      name: "CHIA",
      depCode: 25
    },
    {
      code: 25178,
      name: "CHIPAQUE",
      depCode: 25
    },
    {
      code: 25181,
      name: "CHOACHI",
      depCode: 25
    },
    {
      code: 25183,
      name: "CHOCONTA",
      depCode: 25
    },
    {
      code: 25200,
      name: "COGUA",
      depCode: 25
    },
    {
      code: 25214,
      name: "COTA",
      depCode: 25
    },
    {
      code: 25224,
      name: "CUCUNUBA",
      depCode: 25
    },
    {
      code: 25245,
      name: "EL COLEGIO",
      depCode: 25
    },
    {
      code: 25258,
      name: "EL PENON",
      depCode: 25
    },
    {
      code: 25260,
      name: "EL ROSAL",
      depCode: 25
    },
    {
      code: 25269,
      name: "FACATATIVA",
      depCode: 25
    },
    {
      code: 25279,
      name: "FOMEQUE",
      depCode: 25
    },
    {
      code: 25281,
      name: "FOSCA",
      depCode: 25
    },
    {
      code: 25286,
      name: "FUNZA",
      depCode: 25
    },
    {
      code: 25288,
      name: "FUQUENE",
      depCode: 25
    },
    {
      code: 25290,
      name: "FUSAGASUGA",
      depCode: 25
    },
    {
      code: 25293,
      name: "GACHALA",
      depCode: 25
    },
    {
      code: 25295,
      name: "GACHANCIPA",
      depCode: 25
    },
    {
      code: 25297,
      name: "GACHETA",
      depCode: 25
    },
    {
      code: 25299,
      name: "GAMA",
      depCode: 25
    },
    {
      code: 25307,
      name: "GIRARDOT",
      depCode: 25
    },
    {
      code: 25312,
      name: "GRANADA",
      depCode: 25
    },
    {
      code: 25317,
      name: "GUACHETA",
      depCode: 25
    },
    {
      code: 25320,
      name: "GUADUAS",
      depCode: 25
    },
    {
      code: 25322,
      name: "GUASCA",
      depCode: 25
    },
    {
      code: 25324,
      name: "GUATAQUI",
      depCode: 25
    },
    {
      code: 25326,
      name: "GUATAVITA",
      depCode: 25
    },
    {
      code: 25328,
      name: "GUAYABAL DE SIQUIMA",
      depCode: 25
    },
    {
      code: 25335,
      name: "GUAYABETAL",
      depCode: 25
    },
    {
      code: 25339,
      name: "GUTIERREZ",
      depCode: 25
    },
    {
      code: 25368,
      name: "JERUSALEN",
      depCode: 25
    },
    {
      code: 25372,
      name: "JUNIN",
      depCode: 25
    },
    {
      code: 25377,
      name: "LA CALERA",
      depCode: 25
    },
    {
      code: 25386,
      name: "LA MESA",
      depCode: 25
    },
    {
      code: 25394,
      name: "LA PALMA",
      depCode: 25
    },
    {
      code: 25398,
      name: "LA PENA",
      depCode: 25
    },
    {
      code: 25402,
      name: "LA VEGA",
      depCode: 25
    },
    {
      code: 25407,
      name: "LENGUAZAQUE",
      depCode: 25
    },
    {
      code: 25426,
      name: "MACHETA",
      depCode: 25
    },
    {
      code: 25430,
      name: "MADRID",
      depCode: 25
    },
    {
      code: 25436,
      name: "MANTA",
      depCode: 25
    },
    {
      code: 25438,
      name: "MEDINA",
      depCode: 25
    },
    {
      code: 25473,
      name: "MOSQUERA",
      depCode: 25
    },
    {
      code: 25483,
      name: "NARINO",
      depCode: 25
    },
    {
      code: 25486,
      name: "NEMOCON",
      depCode: 25
    },
    {
      code: 25488,
      name: "NILO",
      depCode: 25
    },
    {
      code: 25489,
      name: "NIMAIMA",
      depCode: 25
    },
    {
      code: 25491,
      name: "NOCAIMA",
      depCode: 25
    },
    {
      code: 25506,
      name: "VENECIA",
      depCode: 25
    },
    {
      code: 25513,
      name: "PACHO",
      depCode: 25
    },
    {
      code: 25518,
      name: "PAIME",
      depCode: 25
    },
    {
      code: 25524,
      name: "PANDI",
      depCode: 25
    },
    {
      code: 25530,
      name: "PARATEBUENO",
      depCode: 25
    },
    {
      code: 25535,
      name: "PASCA",
      depCode: 25
    },
    {
      code: 25572,
      name: "PUERTO SALGAR",
      depCode: 25
    },
    {
      code: 25580,
      name: "PULI",
      depCode: 25
    },
    {
      code: 25592,
      name: "QUEBRADANEGRA",
      depCode: 25
    },
    {
      code: 25594,
      name: "QUETAME",
      depCode: 25
    },
    {
      code: 25596,
      name: "QUIPILE",
      depCode: 25
    },
    {
      code: 25599,
      name: "APULO",
      depCode: 25
    },
    {
      code: 25612,
      name: "RICAURTE",
      depCode: 25
    },
    {
      code: 25645,
      name: "SAN ANTONIO DEL TEQUEND",
      depCode: 25
    },
    {
      code: 25649,
      name: "SAN BERNARDO",
      depCode: 25
    },
    {
      code: 25653,
      name: "SAN CAYETANO",
      depCode: 25
    },
    {
      code: 25658,
      name: "SAN FRANCISCO",
      depCode: 25
    },
    {
      code: 25662,
      name: "SAN JUAN DE RIO SECO",
      depCode: 25
    },
    {
      code: 25718,
      name: "SASAIMA",
      depCode: 25
    },
    {
      code: 25736,
      name: "SESQUILE",
      depCode: 25
    },
    {
      code: 25740,
      name: "SIBATE",
      depCode: 25
    },
    {
      code: 25743,
      name: "SILVANIA",
      depCode: 25
    },
    {
      code: 25745,
      name: "SIMIJACA",
      depCode: 25
    },
    {
      code: 25754,
      name: "SOACHA",
      depCode: 25
    },
    {
      code: 25758,
      name: "SOPO",
      depCode: 25
    },
    {
      code: 25769,
      name: "SUBACHOQUE",
      depCode: 25
    },
    {
      code: 25772,
      name: "SUESCA",
      depCode: 25
    },
    {
      code: 25777,
      name: "SUPATA",
      depCode: 25
    },
    {
      code: 25779,
      name: "SUSA",
      depCode: 25
    },
    {
      code: 25781,
      name: "SUTATAUSA",
      depCode: 25
    },
    {
      code: 25785,
      name: "TABIO",
      depCode: 25
    },
    {
      code: 25793,
      name: "TAUSA",
      depCode: 25
    },
    {
      code: 25797,
      name: "TENA",
      depCode: 25
    },
    {
      code: 25799,
      name: "TENJO",
      depCode: 25
    },
    {
      code: 25805,
      name: "TIBACUY",
      depCode: 25
    },
    {
      code: 25807,
      name: "TIBIRITA",
      depCode: 25
    },
    {
      code: 25815,
      name: "TOCAIMA",
      depCode: 25
    },
    {
      code: 25817,
      name: "TOCANCIPA",
      depCode: 25
    },
    {
      code: 25823,
      name: "TOPAIPI",
      depCode: 25
    },
    {
      code: 25839,
      name: "UBALA",
      depCode: 25
    },
    {
      code: 25841,
      name: "UBAQUE",
      depCode: 25
    },
    {
      code: 25843,
      name: "VILLA DE SAN DIEGO DE UBATE",
      depCode: 25
    },
    {
      code: 25845,
      name: "UNE",
      depCode: 25
    },
    {
      code: 25851,
      name: "UTICA",
      depCode: 25
    },
    {
      code: 25862,
      name: "VERGARA",
      depCode: 25
    },
    {
      code: 25867,
      name: "VIANI",
      depCode: 25
    },
    {
      code: 25871,
      name: "VILLAGOMEZ",
      depCode: 25
    },
    {
      code: 25873,
      name: "VILLAPINZON",
      depCode: 25
    },
    {
      code: 25875,
      name: "VILLETA",
      depCode: 25
    },
    {
      code: 25878,
      name: "VIOTA",
      depCode: 25
    },
    {
      code: 25885,
      name: "YACOPI",
      depCode: 25
    },
    {
      code: 25898,
      name: "ZIPACON",
      depCode: 25
    },
    {
      code: 25899,
      name: "ZIPAQUIRA",
      depCode: 25
    },
    {
      code: 27001,
      name: "QUIBDO",
      depCode: 27
    },
    {
      code: 27006,
      name: "ACANDI",
      depCode: 27
    },
    {
      code: 27025,
      name: "ALTO BAUDO",
      depCode: 27
    },
    {
      code: 27050,
      name: "ATRATO",
      depCode: 27
    },
    {
      code: 27073,
      name: "BAGADO",
      depCode: 27
    },
    {
      code: 27075,
      name: "BAHIA SOLANO",
      depCode: 27
    },
    {
      code: 27077,
      name: "BAJO BAUDO",
      depCode: 27
    },
    {
      code: 27086,
      name: "BELEN DE BAJIRA",
      depCode: 27
    },
    {
      code: 27099,
      name: "BOJAYA",
      depCode: 27
    },
    {
      code: 27135,
      name: "EL CANTON DEL SAN PABLO",
      depCode: 27
    },
    {
      code: 27150,
      name: "CARMEN DEL DARIEN",
      depCode: 27
    },
    {
      code: 27160,
      name: "CERTEGUI",
      depCode: 27
    },
    {
      code: 27205,
      name: "CONDOTO",
      depCode: 27
    },
    {
      code: 27245,
      name: "EL CARMEN DE ATRATO",
      depCode: 27
    },
    {
      code: 27250,
      name: "EL LITORAL DEL SAN JUAN",
      depCode: 27
    },
    {
      code: 27361,
      name: "ISTMINA",
      depCode: 27
    },
    {
      code: 27372,
      name: "JURADO",
      depCode: 27
    },
    {
      code: 27413,
      name: "LLORO",
      depCode: 27
    },
    {
      code: 27425,
      name: "MEDIO ATRATO",
      depCode: 27
    },
    {
      code: 27430,
      name: "MEDIO BAUDO",
      depCode: 27
    },
    {
      code: 27450,
      name: "MEDIO SAN JUAN",
      depCode: 27
    },
    {
      code: 27491,
      name: "NOVITA",
      depCode: 27
    },
    {
      code: 27495,
      name: "NUQUI",
      depCode: 27
    },
    {
      code: 27580,
      name: "RIO IRO",
      depCode: 27
    },
    {
      code: 27600,
      name: "RIO QUITO",
      depCode: 27
    },
    {
      code: 27615,
      name: "RIOSUCIO",
      depCode: 27
    },
    {
      code: 27660,
      name: "SAN JOSE DEL PALMAR",
      depCode: 27
    },
    {
      code: 27745,
      name: "SIPI",
      depCode: 27
    },
    {
      code: 27787,
      name: "TADO",
      depCode: 27
    },
    {
      code: 27800,
      name: "UNGUIA",
      depCode: 27
    },
    {
      code: 27810,
      name: "UNION PANAMERICANA",
      depCode: 27
    },
    {
      code: 41001,
      name: "NEIVA",
      depCode: 41
    },
    {
      code: 41006,
      name: "ACEVEDO",
      depCode: 41
    },
    {
      code: 41013,
      name: "AGRADO",
      depCode: 41
    },
    {
      code: 41016,
      name: "AIPE",
      depCode: 41
    },
    {
      code: 41020,
      name: "ALGECIRAS",
      depCode: 41
    },
    {
      code: 41026,
      name: "ALTAMIRA",
      depCode: 41
    },
    {
      code: 41078,
      name: "BARAYA",
      depCode: 41
    },
    {
      code: 41132,
      name: "CAMPOALEGRE",
      depCode: 41
    },
    {
      code: 41206,
      name: "COLOMBIA",
      depCode: 41
    },
    {
      code: 41244,
      name: "ELIAS",
      depCode: 41
    },
    {
      code: 41298,
      name: "GARZON",
      depCode: 41
    },
    {
      code: 41306,
      name: "GIGANTE",
      depCode: 41
    },
    {
      code: 41319,
      name: "GUADALUPE",
      depCode: 41
    },
    {
      code: 41349,
      name: "HOBO",
      depCode: 41
    },
    {
      code: 41357,
      name: "IQUIRA",
      depCode: 41
    },
    {
      code: 41359,
      name: "ISNOS",
      depCode: 41
    },
    {
      code: 41378,
      name: "LA ARGENTINA",
      depCode: 41
    },
    {
      code: 41396,
      name: "LA PLATA",
      depCode: 41
    },
    {
      code: 41483,
      name: "NATAGA",
      depCode: 41
    },
    {
      code: 41503,
      name: "OPORAPA",
      depCode: 41
    },
    {
      code: 41518,
      name: "PAICOL",
      depCode: 41
    },
    {
      code: 41524,
      name: "PALERMO",
      depCode: 41
    },
    {
      code: 41530,
      name: "PALESTINA",
      depCode: 41
    },
    {
      code: 41548,
      name: "PITAL",
      depCode: 41
    },
    {
      code: 41551,
      name: "PITALITO",
      depCode: 41
    },
    {
      code: 41615,
      name: "RIVERA",
      depCode: 41
    },
    {
      code: 41660,
      name: "SALADOBLANCO",
      depCode: 41
    },
    {
      code: 41668,
      name: "SAN AGUSTIN",
      depCode: 41
    },
    {
      code: 41676,
      name: "SANTA MARIA",
      depCode: 41
    },
    {
      code: 41770,
      name: "SUAZA",
      depCode: 41
    },
    {
      code: 41791,
      name: "TARQUI",
      depCode: 41
    },
    {
      code: 41797,
      name: "TESALIA",
      depCode: 41
    },
    {
      code: 41799,
      name: "TELLO",
      depCode: 41
    },
    {
      code: 41801,
      name: "TERUEL",
      depCode: 41
    },
    {
      code: 41807,
      name: "TIMANA",
      depCode: 41
    },
    {
      code: 41872,
      name: "VILLAVIEJA",
      depCode: 41
    },
    {
      code: 41885,
      name: "YAGUARA",
      depCode: 41
    },
    {
      code: 44001,
      name: "RIOHACHA",
      depCode: 44
    },
    {
      code: 44035,
      name: "ALBANIA",
      depCode: 44
    },
    {
      code: 44078,
      name: "BARRANCAS",
      depCode: 44
    },
    {
      code: 44090,
      name: "DIBULLA",
      depCode: 44
    },
    {
      code: 44098,
      name: "DISTRACCION",
      depCode: 44
    },
    {
      code: 44110,
      name: "EL MOLINO",
      depCode: 44
    },
    {
      code: 44279,
      name: "FONSECA",
      depCode: 44
    },
    {
      code: 44378,
      name: "HATONUEVO",
      depCode: 44
    },
    {
      code: 44420,
      name: "LA JAGUA DEL PILAR",
      depCode: 44
    },
    {
      code: 44430,
      name: "MAICAO",
      depCode: 44
    },
    {
      code: 44560,
      name: "MANAURE",
      depCode: 44
    },
    {
      code: 44650,
      name: "SAN JUAN DEL CESAR",
      depCode: 44
    },
    {
      code: 44847,
      name: "URIBIA",
      depCode: 44
    },
    {
      code: 44855,
      name: "URUMITA",
      depCode: 44
    },
    {
      code: 44874,
      name: "VILLANUEVA",
      depCode: 44
    },
    {
      code: 47001,
      name: "SANTA MARTA",
      depCode: 47
    },
    {
      code: 47030,
      name: "ALGARROBO",
      depCode: 47
    },
    {
      code: 47053,
      name: "ARACATACA",
      depCode: 47
    },
    {
      code: 47058,
      name: "ARIGUANI",
      depCode: 47
    },
    {
      code: 47161,
      name: "CERRO SAN ANTONIO",
      depCode: 47
    },
    {
      code: 47170,
      name: "CHIVOLO",
      depCode: 47
    },
    {
      code: 47189,
      name: "CIENAGA",
      depCode: 47
    },
    {
      code: 47205,
      name: "CONCORDIA",
      depCode: 47
    },
    {
      code: 47245,
      name: "EL BANCO",
      depCode: 47
    },
    {
      code: 47258,
      name: "EL PINON",
      depCode: 47
    },
    {
      code: 47268,
      name: "EL RETEN",
      depCode: 47
    },
    {
      code: 47288,
      name: "FUNDACION",
      depCode: 47
    },
    {
      code: 47318,
      name: "GUAMAL",
      depCode: 47
    },
    {
      code: 47460,
      name: "NUEVA GRANADA",
      depCode: 47
    },
    {
      code: 47541,
      name: "PEDRAZA",
      depCode: 47
    },
    {
      code: 47545,
      name: "PIJINO DEL CARMEN",
      depCode: 47
    },
    {
      code: 47551,
      name: "PIVIJAY",
      depCode: 47
    },
    {
      code: 47555,
      name: "PLATO",
      depCode: 47
    },
    {
      code: 47570,
      name: "PUEBLOVIEJO",
      depCode: 47
    },
    {
      code: 47605,
      name: "REMOLINO",
      depCode: 47
    },
    {
      code: 47660,
      name: "SABANAS DE SAN ANGEL",
      depCode: 47
    },
    {
      code: 47675,
      name: "SALAMINA",
      depCode: 47
    },
    {
      code: 47692,
      name: "SAN SEBASTIAN DE BUENAV",
      depCode: 47
    },
    {
      code: 47703,
      name: "SAN ZENON",
      depCode: 47
    },
    {
      code: 47707,
      name: "SANTA ANA",
      depCode: 47
    },
    {
      code: 47720,
      name: "SANTA BARBARA DE PINTO",
      depCode: 47
    },
    {
      code: 47745,
      name: "SITIONUEVO",
      depCode: 47
    },
    {
      code: 47798,
      name: "TENERIFE",
      depCode: 47
    },
    {
      code: 47960,
      name: "ZAPAYAN",
      depCode: 47
    },
    {
      code: 47980,
      name: "ZONA BANANERA",
      depCode: 47
    },
    {
      code: 50001,
      name: "VILLAVICENCIO",
      depCode: 50
    },
    {
      code: 50006,
      name: "ACACIAS",
      depCode: 50
    },
    {
      code: 50110,
      name: "BARRANCA DE UPIA",
      depCode: 50
    },
    {
      code: 50124,
      name: "CABUYARO",
      depCode: 50
    },
    {
      code: 50150,
      name: "CASTILLA LA NUEVA",
      depCode: 50
    },
    {
      code: 50223,
      name: "CUBARRAL",
      depCode: 50
    },
    {
      code: 50226,
      name: "CUMARAL",
      depCode: 50
    },
    {
      code: 50245,
      name: "EL CALVARIO",
      depCode: 50
    },
    {
      code: 50251,
      name: "EL CASTILLO",
      depCode: 50
    },
    {
      code: 50270,
      name: "EL DORADO",
      depCode: 50
    },
    {
      code: 50287,
      name: "FUENTE DE ORO",
      depCode: 50
    },
    {
      code: 50313,
      name: "GRANADA",
      depCode: 50
    },
    {
      code: 50318,
      name: "GUAMAL",
      depCode: 50
    },
    {
      code: 50325,
      name: "MAPIRIPAN",
      depCode: 50
    },
    {
      code: 50330,
      name: "MESETAS",
      depCode: 50
    },
    {
      code: 50350,
      name: "LA MACARENA",
      depCode: 50
    },
    {
      code: 50370,
      name: "URIBE",
      depCode: 50
    },
    {
      code: 50400,
      name: "LEJANIAS",
      depCode: 50
    },
    {
      code: 50450,
      name: "PUERTO CONCORDIA",
      depCode: 50
    },
    {
      code: 50568,
      name: "PUERTO GAITAN",
      depCode: 50
    },
    {
      code: 50573,
      name: "PUERTO LOPEZ",
      depCode: 50
    },
    {
      code: 50577,
      name: "PUERTO LLERAS",
      depCode: 50
    },
    {
      code: 50590,
      name: "PUERTO RICO",
      depCode: 50
    },
    {
      code: 50606,
      name: "RESTREPO",
      depCode: 50
    },
    {
      code: 50680,
      name: "SAN CARLOS DE GUAROA",
      depCode: 50
    },
    {
      code: 50683,
      name: "SAN JUAN DE ARAMA",
      depCode: 50
    },
    {
      code: 50686,
      name: "SAN JUANITO",
      depCode: 50
    },
    {
      code: 50689,
      name: "SAN MARTIN",
      depCode: 50
    },
    {
      code: 50711,
      name: "VISTA HERMOSA",
      depCode: 50
    },
    {
      code: 52001,
      name: "PASTO",
      depCode: 52
    },
    {
      code: 52019,
      name: "ALBAN",
      depCode: 52
    },
    {
      code: 52022,
      name: "ALDANA",
      depCode: 52
    },
    {
      code: 52036,
      name: "ANCUYA",
      depCode: 52
    },
    {
      code: 52051,
      name: "ARBOLEDA",
      depCode: 52
    },
    {
      code: 52079,
      name: "BARBACOAS",
      depCode: 52
    },
    {
      code: 52083,
      name: "BELEN",
      depCode: 52
    },
    {
      code: 52110,
      name: "BUESACO",
      depCode: 52
    },
    {
      code: 52203,
      name: "COLON",
      depCode: 52
    },
    {
      code: 52207,
      name: "CONSACA",
      depCode: 52
    },
    {
      code: 52210,
      name: "CONTADERO",
      depCode: 52
    },
    {
      code: 52215,
      name: "CORDOBA",
      depCode: 52
    },
    {
      code: 52224,
      name: "CUASPUD",
      depCode: 52
    },
    {
      code: 52227,
      name: "CUMBAL",
      depCode: 52
    },
    {
      code: 52233,
      name: "CUMBITARA",
      depCode: 52
    },
    {
      code: 52240,
      name: "CHACHAGUI",
      depCode: 52
    },
    {
      code: 52250,
      name: "EL CHARCO",
      depCode: 52
    },
    {
      code: 52254,
      name: "EL PENOL",
      depCode: 52
    },
    {
      code: 52256,
      name: "EL ROSARIO",
      depCode: 52
    },
    {
      code: 52258,
      name: "EL TABLON DE GOMEZ",
      depCode: 52
    },
    {
      code: 52260,
      name: "EL TAMBO",
      depCode: 52
    },
    {
      code: 52287,
      name: "FUNES",
      depCode: 52
    },
    {
      code: 52317,
      name: "GUACHUCAL",
      depCode: 52
    },
    {
      code: 52320,
      name: "GUAITARILLA",
      depCode: 52
    },
    {
      code: 52323,
      name: "GUALMATAN",
      depCode: 52
    },
    {
      code: 52352,
      name: "ILES",
      depCode: 52
    },
    {
      code: 52354,
      name: "IMUES",
      depCode: 52
    },
    {
      code: 52356,
      name: "IPIALES",
      depCode: 52
    },
    {
      code: 52378,
      name: "LA CRUZ",
      depCode: 52
    },
    {
      code: 52381,
      name: "LA FLORIDA",
      depCode: 52
    },
    {
      code: 52385,
      name: "LA LLANADA",
      depCode: 52
    },
    {
      code: 52390,
      name: "LA TOLA",
      depCode: 52
    },
    {
      code: 52399,
      name: "LA UNION",
      depCode: 52
    },
    {
      code: 52405,
      name: "LEIVA",
      depCode: 52
    },
    {
      code: 52411,
      name: "LINARES",
      depCode: 52
    },
    {
      code: 52418,
      name: "LOS ANDES",
      depCode: 52
    },
    {
      code: 52427,
      name: "MAGUI",
      depCode: 52
    },
    {
      code: 52435,
      name: "MALLAMA",
      depCode: 52
    },
    {
      code: 52473,
      name: "MOSQUERA",
      depCode: 52
    },
    {
      code: 52480,
      name: "NARINO",
      depCode: 52
    },
    {
      code: 52490,
      name: "OLAYA HERRERA",
      depCode: 52
    },
    {
      code: 52506,
      name: "OSPINA",
      depCode: 52
    },
    {
      code: 52520,
      name: "FRANCISCO PIZARRO",
      depCode: 52
    },
    {
      code: 52540,
      name: "POLICARPA",
      depCode: 52
    },
    {
      code: 52560,
      name: "POTOSI",
      depCode: 52
    },
    {
      code: 52565,
      name: "PROVIDENCIA",
      depCode: 52
    },
    {
      code: 52573,
      name: "PUERRES",
      depCode: 52
    },
    {
      code: 52585,
      name: "PUPIALES",
      depCode: 52
    },
    {
      code: 52612,
      name: "RICAURTE",
      depCode: 52
    },
    {
      code: 52621,
      name: "ROBERTO PAYAN",
      depCode: 52
    },
    {
      code: 52678,
      name: "SAMANIEGO",
      depCode: 52
    },
    {
      code: 52683,
      name: "SANDONA",
      depCode: 52
    },
    {
      code: 52685,
      name: "SAN BERNARDO",
      depCode: 52
    },
    {
      code: 52687,
      name: "SAN LORENZO",
      depCode: 52
    },
    {
      code: 52693,
      name: "SAN PABLO",
      depCode: 52
    },
    {
      code: 52694,
      name: "SAN PEDRO DE CARTAGO",
      depCode: 52
    },
    {
      code: 52696,
      name: "SANTA BARBARA",
      depCode: 52
    },
    {
      code: 52699,
      name: "SANTACRUZ",
      depCode: 52
    },
    {
      code: 52720,
      name: "SAPUYES",
      depCode: 52
    },
    {
      code: 52786,
      name: "TAMINANGO",
      depCode: 52
    },
    {
      code: 52788,
      name: "TANGUA",
      depCode: 52
    },
    {
      code: 52835,
      name: "TUMACO",
      depCode: 52
    },
    {
      code: 52838,
      name: "TUQUERRES",
      depCode: 52
    },
    {
      code: 52885,
      name: "YACUANQUER",
      depCode: 52
    },
    {
      code: 54001,
      name: "CUCUTA",
      depCode: 54
    },
    {
      code: 54003,
      name: "ABREGO",
      depCode: 54
    },
    {
      code: 54051,
      name: "ARBOLEDAS",
      depCode: 54
    },
    {
      code: 54099,
      name: "BOCHALEMA",
      depCode: 54
    },
    {
      code: 54109,
      name: "BUCARASICA",
      depCode: 54
    },
    {
      code: 54125,
      name: "CACOTA",
      depCode: 54
    },
    {
      code: 54128,
      name: "CACHIRA",
      depCode: 54
    },
    {
      code: 54172,
      name: "CHINACOTA",
      depCode: 54
    },
    {
      code: 54174,
      name: "CHITAGA",
      depCode: 54
    },
    {
      code: 54206,
      name: "CONVENCION",
      depCode: 54
    },
    {
      code: 54223,
      name: "CUCUTILLA",
      depCode: 54
    },
    {
      code: 54239,
      name: "DURANIA",
      depCode: 54
    },
    {
      code: 54245,
      name: "EL CARMEN",
      depCode: 54
    },
    {
      code: 54250,
      name: "EL TARRA",
      depCode: 54
    },
    {
      code: 54261,
      name: "EL ZULIA",
      depCode: 54
    },
    {
      code: 54313,
      name: "GRAMALOTE",
      depCode: 54
    },
    {
      code: 54344,
      name: "HACARI",
      depCode: 54
    },
    {
      code: 54347,
      name: "HERRAN",
      depCode: 54
    },
    {
      code: 54377,
      name: "LABATECA",
      depCode: 54
    },
    {
      code: 54385,
      name: "LA ESPERANZA",
      depCode: 54
    },
    {
      code: 54398,
      name: "LA PLAYA",
      depCode: 54
    },
    {
      code: 54405,
      name: "LOS PATIOS",
      depCode: 54
    },
    {
      code: 54418,
      name: "LOURDES",
      depCode: 54
    },
    {
      code: 54480,
      name: "MUTISCUA",
      depCode: 54
    },
    {
      code: 54498,
      name: "OCANA",
      depCode: 54
    },
    {
      code: 54518,
      name: "PAMPLONA",
      depCode: 54
    },
    {
      code: 54520,
      name: "PAMPLONITA",
      depCode: 54
    },
    {
      code: 54553,
      name: "PUERTO SANTANDER",
      depCode: 54
    },
    {
      code: 54599,
      name: "RAGONVALIA",
      depCode: 54
    },
    {
      code: 54660,
      name: "SALAZAR",
      depCode: 54
    },
    {
      code: 54670,
      name: "SAN CALIXTO",
      depCode: 54
    },
    {
      code: 54673,
      name: "SAN CAYETANO",
      depCode: 54
    },
    {
      code: 54680,
      name: "SANTIAGO",
      depCode: 54
    },
    {
      code: 54720,
      name: "SARDINATA",
      depCode: 54
    },
    {
      code: 54743,
      name: "SILOS",
      depCode: 54
    },
    {
      code: 54800,
      name: "TEORAMA",
      depCode: 54
    },
    {
      code: 54810,
      name: "TIBU",
      depCode: 54
    },
    {
      code: 54820,
      name: "TOLEDO",
      depCode: 54
    },
    {
      code: 54871,
      name: "VILLA CARO",
      depCode: 54
    },
    {
      code: 54874,
      name: "VILLA DEL ROSARIO",
      depCode: 54
    },
    {
      code: 63001,
      name: "ARMENIA",
      depCode: 63
    },
    {
      code: 63111,
      name: "BUENAVISTA",
      depCode: 63
    },
    {
      code: 63130,
      name: "CALARCA",
      depCode: 63
    },
    {
      code: 63190,
      name: "CIRCASIA",
      depCode: 63
    },
    {
      code: 63212,
      name: "CORDOBA",
      depCode: 63
    },
    {
      code: 63272,
      name: "FILANDIA",
      depCode: 63
    },
    {
      code: 63302,
      name: "GENOVA",
      depCode: 63
    },
    {
      code: 63401,
      name: "LA TEBAIDA",
      depCode: 63
    },
    {
      code: 63470,
      name: "MONTENEGRO",
      depCode: 63
    },
    {
      code: 63548,
      name: "PIJAO",
      depCode: 63
    },
    {
      code: 63594,
      name: "QUIMBAYA",
      depCode: 63
    },
    {
      code: 63690,
      name: "SALENTO",
      depCode: 63
    },
    {
      code: 66001,
      name: "PEREIRA",
      depCode: 66
    },
    {
      code: 66045,
      name: "APIA",
      depCode: 66
    },
    {
      code: 66075,
      name: "BALBOA",
      depCode: 66
    },
    {
      code: 66088,
      name: "BELEN DE UMBRIA",
      depCode: 66
    },
    {
      code: 66170,
      name: "DOSQUEBRADAS",
      depCode: 66
    },
    {
      code: 66318,
      name: "GUATICA",
      depCode: 66
    },
    {
      code: 66383,
      name: "LA CELIA",
      depCode: 66
    },
    {
      code: 66400,
      name: "LA VIRGINIA",
      depCode: 66
    },
    {
      code: 66440,
      name: "MARSELLA",
      depCode: 66
    },
    {
      code: 66456,
      name: "MISTRATO",
      depCode: 66
    },
    {
      code: 66572,
      name: "PUEBLO RICO",
      depCode: 66
    },
    {
      code: 66594,
      name: "QUINCHIA",
      depCode: 66
    },
    {
      code: 66682,
      name: "SANTA ROSA DE CABAL",
      depCode: 66
    },
    {
      code: 66687,
      name: "SANTUARIO",
      depCode: 66
    },
    {
      code: 68001,
      name: "BUCARAMANGA",
      depCode: 68
    },
    {
      code: 68013,
      name: "AGUADA",
      depCode: 68
    },
    {
      code: 68020,
      name: "ALBANIA",
      depCode: 68
    },
    {
      code: 68051,
      name: "ARATOCA",
      depCode: 68
    },
    {
      code: 68077,
      name: "BARBOSA",
      depCode: 68
    },
    {
      code: 68079,
      name: "BARICHARA",
      depCode: 68
    },
    {
      code: 68081,
      name: "BARRANCABERMEJA",
      depCode: 68
    },
    {
      code: 68092,
      name: "BETULIA",
      depCode: 68
    },
    {
      code: 68101,
      name: "BOLIVAR",
      depCode: 68
    },
    {
      code: 68121,
      name: "CABRERA",
      depCode: 68
    },
    {
      code: 68132,
      name: "CALIFORNIA",
      depCode: 68
    },
    {
      code: 68147,
      name: "CAPITANEJO",
      depCode: 68
    },
    {
      code: 68152,
      name: "CARCASI",
      depCode: 68
    },
    {
      code: 68160,
      name: "CEPITA",
      depCode: 68
    },
    {
      code: 68162,
      name: "CERRITO",
      depCode: 68
    },
    {
      code: 68167,
      name: "CHARALA",
      depCode: 68
    },
    {
      code: 68169,
      name: "CHARTA",
      depCode: 68
    },
    {
      code: 68176,
      name: "CHIMA",
      depCode: 68
    },
    {
      code: 68179,
      name: "CHIPATA",
      depCode: 68
    },
    {
      code: 68190,
      name: "CIMITARRA",
      depCode: 68
    },
    {
      code: 68207,
      name: "CONCEPCION",
      depCode: 68
    },
    {
      code: 68209,
      name: "CONFINES",
      depCode: 68
    },
    {
      code: 68211,
      name: "CONTRATACION",
      depCode: 68
    },
    {
      code: 68217,
      name: "COROMORO",
      depCode: 68
    },
    {
      code: 68229,
      name: "CURITI",
      depCode: 68
    },
    {
      code: 68235,
      name: "EL CARMEN DE CHUCURI",
      depCode: 68
    },
    {
      code: 68245,
      name: "EL GUACAMAYO",
      depCode: 68
    },
    {
      code: 68250,
      name: "EL PENON",
      depCode: 68
    },
    {
      code: 68255,
      name: "EL PLAYON",
      depCode: 68
    },
    {
      code: 68264,
      name: "ENCINO",
      depCode: 68
    },
    {
      code: 68266,
      name: "ENCISO",
      depCode: 68
    },
    {
      code: 68271,
      name: "FLORIAN",
      depCode: 68
    },
    {
      code: 68276,
      name: "FLORIDABLANCA",
      depCode: 68
    },
    {
      code: 68296,
      name: "GALAN",
      depCode: 68
    },
    {
      code: 68298,
      name: "GAMBITA",
      depCode: 68
    },
    {
      code: 68307,
      name: "GIRON",
      depCode: 68
    },
    {
      code: 68318,
      name: "GUACA",
      depCode: 68
    },
    {
      code: 68320,
      name: "GUADALUPE",
      depCode: 68
    },
    {
      code: 68322,
      name: "GUAPOTA",
      depCode: 68
    },
    {
      code: 68324,
      name: "GUAVATA",
      depCode: 68
    },
    {
      code: 68327,
      name: "GUEPSA",
      depCode: 68
    },
    {
      code: 68344,
      name: "HATO",
      depCode: 68
    },
    {
      code: 68368,
      name: "JESUS MARIA",
      depCode: 68
    },
    {
      code: 68370,
      name: "JORDAN",
      depCode: 68
    },
    {
      code: 68377,
      name: "LA BELLEZA",
      depCode: 68
    },
    {
      code: 68385,
      name: "LANDAZURI",
      depCode: 68
    },
    {
      code: 68397,
      name: "LA PAZ",
      depCode: 68
    },
    {
      code: 68406,
      name: "LEBRIJA",
      depCode: 68
    },
    {
      code: 68418,
      name: "LOS SANTOS",
      depCode: 68
    },
    {
      code: 68425,
      name: "MACARAVITA",
      depCode: 68
    },
    {
      code: 68432,
      name: "MALAGA",
      depCode: 68
    },
    {
      code: 68444,
      name: "MATANZA",
      depCode: 68
    },
    {
      code: 68464,
      name: "MOGOTES",
      depCode: 68
    },
    {
      code: 68468,
      name: "MOLAGAVITA",
      depCode: 68
    },
    {
      code: 68498,
      name: "OCAMONTE",
      depCode: 68
    },
    {
      code: 68500,
      name: "OIBA",
      depCode: 68
    },
    {
      code: 68502,
      name: "ONZAGA",
      depCode: 68
    },
    {
      code: 68522,
      name: "PALMAR",
      depCode: 68
    },
    {
      code: 68524,
      name: "PALMAS DEL SOCORRO",
      depCode: 68
    },
    {
      code: 68533,
      name: "PARAMO",
      depCode: 68
    },
    {
      code: 68547,
      name: "PIEDECUESTA",
      depCode: 68
    },
    {
      code: 68549,
      name: "PINCHOTE",
      depCode: 68
    },
    {
      code: 68572,
      name: "PUENTE NACIONAL",
      depCode: 68
    },
    {
      code: 68573,
      name: "PUERTO PARRA",
      depCode: 68
    },
    {
      code: 68575,
      name: "PUERTO WILCHES",
      depCode: 68
    },
    {
      code: 68615,
      name: "RIONEGRO",
      depCode: 68
    },
    {
      code: 68655,
      name: "SABANA DE TORRES",
      depCode: 68
    },
    {
      code: 68669,
      name: "SAN ANDRES",
      depCode: 68
    },
    {
      code: 68673,
      name: "SAN BENITO",
      depCode: 68
    },
    {
      code: 68679,
      name: "SAN GIL",
      depCode: 68
    },
    {
      code: 68682,
      name: "SAN JOAQUIN",
      depCode: 68
    },
    {
      code: 68684,
      name: "SAN JOSE DE MIRANDA",
      depCode: 68
    },
    {
      code: 68686,
      name: "SAN MIGUEL",
      depCode: 68
    },
    {
      code: 68689,
      name: "SAN VICENTE DE CHUCURI",
      depCode: 68
    },
    {
      code: 68705,
      name: "SANTA BARBARA",
      depCode: 68
    },
    {
      code: 68720,
      name: "SANTA HELENA DEL OPON",
      depCode: 68
    },
    {
      code: 68745,
      name: "SIMACOTA",
      depCode: 68
    },
    {
      code: 68755,
      name: "SOCORRO",
      depCode: 68
    },
    {
      code: 68770,
      name: "SUAITA",
      depCode: 68
    },
    {
      code: 68773,
      name: "SUCRE",
      depCode: 68
    },
    {
      code: 68780,
      name: "SURATA",
      depCode: 68
    },
    {
      code: 68820,
      name: "TONA",
      depCode: 68
    },
    {
      code: 68855,
      name: "VALLE DE SAN JOSE",
      depCode: 68
    },
    {
      code: 68861,
      name: "VELEZ",
      depCode: 68
    },
    {
      code: 68867,
      name: "VETAS",
      depCode: 68
    },
    {
      code: 68872,
      name: "VILLANUEVA",
      depCode: 68
    },
    {
      code: 68895,
      name: "ZAPATOCA",
      depCode: 68
    },
    {
      code: 70001,
      name: "SINCELEJO",
      depCode: 70
    },
    {
      code: 70110,
      name: "BUENAVISTA",
      depCode: 70
    },
    {
      code: 70124,
      name: "CAIMITO",
      depCode: 70
    },
    {
      code: 70204,
      name: "COLOSO",
      depCode: 70
    },
    {
      code: 70215,
      name: "COROZAL",
      depCode: 70
    },
    {
      code: 70221,
      name: "COVE�AS",
      depCode: 70
    },
    {
      code: 70230,
      name: "CHALAN",
      depCode: 70
    },
    {
      code: 70233,
      name: "EL ROBLE",
      depCode: 70
    },
    {
      code: 70235,
      name: "GALERAS",
      depCode: 70
    },
    {
      code: 70265,
      name: "GUARANDA",
      depCode: 70
    },
    {
      code: 70400,
      name: "LA UNION",
      depCode: 70
    },
    {
      code: 70418,
      name: "LOS PALMITOS",
      depCode: 70
    },
    {
      code: 70429,
      name: "MAJAGUAL",
      depCode: 70
    },
    {
      code: 70473,
      name: "MORROA",
      depCode: 70
    },
    {
      code: 70508,
      name: "OVEJAS",
      depCode: 70
    },
    {
      code: 70523,
      name: "PALMITO",
      depCode: 70
    },
    {
      code: 70670,
      name: "SAMPUES",
      depCode: 70
    },
    {
      code: 70678,
      name: "SAN BENITO ABAD",
      depCode: 70
    },
    {
      code: 70702,
      name: "SAN JUAN DE BETULIA",
      depCode: 70
    },
    {
      code: 70708,
      name: "SAN MARCOS",
      depCode: 70
    },
    {
      code: 70713,
      name: "SAN ONOFRE",
      depCode: 70
    },
    {
      code: 70717,
      name: "SAN PEDRO",
      depCode: 70
    },
    {
      code: 70742,
      name: "SINCE",
      depCode: 70
    },
    {
      code: 70771,
      name: "SUCRE",
      depCode: 70
    },
    {
      code: 70820,
      name: "SANTIAGO DE TOLU",
      depCode: 70
    },
    {
      code: 70823,
      name: "TOLUVIEJO",
      depCode: 70
    },
    {
      code: 73001,
      name: "IBAGUE",
      depCode: 73
    },
    {
      code: 73024,
      name: "ALPUJARRA",
      depCode: 73
    },
    {
      code: 73026,
      name: "ALVARADO",
      depCode: 73
    },
    {
      code: 73030,
      name: "AMBALEMA",
      depCode: 73
    },
    {
      code: 73043,
      name: "ANZOATEGUI",
      depCode: 73
    },
    {
      code: 73055,
      name: "ARMERO",
      depCode: 73
    },
    {
      code: 73067,
      name: "ATACO",
      depCode: 73
    },
    {
      code: 73124,
      name: "CAJAMARCA",
      depCode: 73
    },
    {
      code: 73148,
      name: "CARMEN DE APICALA",
      depCode: 73
    },
    {
      code: 73152,
      name: "CASABIANCA",
      depCode: 73
    },
    {
      code: 73168,
      name: "CHAPARRAL",
      depCode: 73
    },
    {
      code: 73200,
      name: "COELLO",
      depCode: 73
    },
    {
      code: 73217,
      name: "COYAIMA",
      depCode: 73
    },
    {
      code: 73226,
      name: "CUNDAY",
      depCode: 73
    },
    {
      code: 73236,
      name: "DOLORES",
      depCode: 73
    },
    {
      code: 73268,
      name: "ESPINAL",
      depCode: 73
    },
    {
      code: 73270,
      name: "FALAN",
      depCode: 73
    },
    {
      code: 73275,
      name: "FLANDES",
      depCode: 73
    },
    {
      code: 73283,
      name: "FRESNO",
      depCode: 73
    },
    {
      code: 73319,
      name: "GUAMO",
      depCode: 73
    },
    {
      code: 73347,
      name: "HERVEO",
      depCode: 73
    },
    {
      code: 73349,
      name: "HONDA",
      depCode: 73
    },
    {
      code: 73352,
      name: "ICONONZO",
      depCode: 73
    },
    {
      code: 73408,
      name: "LERIDA",
      depCode: 73
    },
    {
      code: 73411,
      name: "LIBANO",
      depCode: 73
    },
    {
      code: 73443,
      name: "MARIQUITA",
      depCode: 73
    },
    {
      code: 73449,
      name: "MELGAR",
      depCode: 73
    },
    {
      code: 73461,
      name: "MURILLO",
      depCode: 73
    },
    {
      code: 73483,
      name: "NATAGAIMA",
      depCode: 73
    },
    {
      code: 73504,
      name: "ORTEGA",
      depCode: 73
    },
    {
      code: 73520,
      name: "PALOCABILDO",
      depCode: 73
    },
    {
      code: 73547,
      name: "PIEDRAS",
      depCode: 73
    },
    {
      code: 73555,
      name: "PLANADAS",
      depCode: 73
    },
    {
      code: 73563,
      name: "PRADO",
      depCode: 73
    },
    {
      code: 73585,
      name: "PURIFICACION",
      depCode: 73
    },
    {
      code: 73616,
      name: "RIOBLANCO",
      depCode: 73
    },
    {
      code: 73622,
      name: "RONCESVALLES",
      depCode: 73
    },
    {
      code: 73624,
      name: "ROVIRA",
      depCode: 73
    },
    {
      code: 73671,
      name: "SALDANA",
      depCode: 73
    },
    {
      code: 73675,
      name: "SAN ANTONIO",
      depCode: 73
    },
    {
      code: 73678,
      name: "SAN LUIS",
      depCode: 73
    },
    {
      code: 73686,
      name: "SANTA ISABEL",
      depCode: 73
    },
    {
      code: 73770,
      name: "SUAREZ",
      depCode: 73
    },
    {
      code: 73854,
      name: "VALLE DE SAN JUAN",
      depCode: 73
    },
    {
      code: 73861,
      name: "VENADILLO",
      depCode: 73
    },
    {
      code: 73870,
      name: "VILLAHERMOSA",
      depCode: 73
    },
    {
      code: 73873,
      name: "VILLARRICA",
      depCode: 73
    },
    {
      code: 76001,
      name: "CALI",
      depCode: 76
    },
    {
      code: 76020,
      name: "ALCALA",
      depCode: 76
    },
    {
      code: 76036,
      name: "ANDALUCIA",
      depCode: 76
    },
    {
      code: 76041,
      name: "ANSERMANUEVO",
      depCode: 76
    },
    {
      code: 76054,
      name: "ARGELIA",
      depCode: 76
    },
    {
      code: 76100,
      name: "BOLIVAR",
      depCode: 76
    },
    {
      code: 76109,
      name: "BUENAVENTURA",
      depCode: 76
    },
    {
      code: 76111,
      name: "GUADALAJARA DE BUGA",
      depCode: 76
    },
    {
      code: 76113,
      name: "BUGALAGRANDE",
      depCode: 76
    },
    {
      code: 76122,
      name: "CAICEDONIA",
      depCode: 76
    },
    {
      code: 76126,
      name: "CALIMA",
      depCode: 76
    },
    {
      code: 76130,
      name: "CANDELARIA",
      depCode: 76
    },
    {
      code: 76147,
      name: "CARTAGO",
      depCode: 76
    },
    {
      code: 76233,
      name: "DAGUA",
      depCode: 76
    },
    {
      code: 76243,
      name: "EL AGUILA",
      depCode: 76
    },
    {
      code: 76246,
      name: "EL CAIRO",
      depCode: 76
    },
    {
      code: 76248,
      name: "EL CERRITO",
      depCode: 76
    },
    {
      code: 76250,
      name: "EL DOVIO",
      depCode: 76
    },
    {
      code: 76275,
      name: "FLORIDA",
      depCode: 76
    },
    {
      code: 76306,
      name: "GINEBRA",
      depCode: 76
    },
    {
      code: 76318,
      name: "GUACARI",
      depCode: 76
    },
    {
      code: 76364,
      name: "JAMUNDI",
      depCode: 76
    },
    {
      code: 76377,
      name: "LA CUMBRE",
      depCode: 76
    },
    {
      code: 76400,
      name: "LA UNION",
      depCode: 76
    },
    {
      code: 76403,
      name: "LA VICTORIA",
      depCode: 76
    },
    {
      code: 76497,
      name: "OBANDO",
      depCode: 76
    },
    {
      code: 76520,
      name: "PALMIRA",
      depCode: 76
    },
    {
      code: 76563,
      name: "PRADERA",
      depCode: 76
    },
    {
      code: 76606,
      name: "RESTREPO",
      depCode: 76
    },
    {
      code: 76616,
      name: "RIOFRIO",
      depCode: 76
    },
    {
      code: 76622,
      name: "ROLDANILLO",
      depCode: 76
    },
    {
      code: 76670,
      name: "SAN PEDRO",
      depCode: 76
    },
    {
      code: 76736,
      name: "SEVILLA",
      depCode: 76
    },
    {
      code: 76823,
      name: "TORO",
      depCode: 76
    },
    {
      code: 76828,
      name: "TRUJILLO",
      depCode: 76
    },
    {
      code: 76834,
      name: "TULUA",
      depCode: 76
    },
    {
      code: 76845,
      name: "ULLOA",
      depCode: 76
    },
    {
      code: 76863,
      name: "VERSALLES",
      depCode: 76
    },
    {
      code: 76869,
      name: "VIJES",
      depCode: 76
    },
    {
      code: 76890,
      name: "YOTOCO",
      depCode: 76
    },
    {
      code: 76892,
      name: "YUMBO",
      depCode: 76
    },
    {
      code: 76895,
      name: "ZARZAL",
      depCode: 76
    },
    {
      code: 81001,
      name: "ARAUCA",
      depCode: 81
    },
    {
      code: 81065,
      name: "ARAUQUITA",
      depCode: 81
    },
    {
      code: 81220,
      name: "CRAVO NORTE",
      depCode: 81
    },
    {
      code: 81300,
      name: "FORTUL",
      depCode: 81
    },
    {
      code: 81591,
      name: "PUERTO RONDON",
      depCode: 81
    },
    {
      code: 81736,
      name: "SARAVENA",
      depCode: 81
    },
    {
      code: 81794,
      name: "TAME",
      depCode: 81
    },
    {
      code: 85001,
      name: "YOPAL",
      depCode: 85
    },
    {
      code: 85010,
      name: "AGUAZUL",
      depCode: 85
    },
    {
      code: 85015,
      name: "CHAMEZA",
      depCode: 85
    },
    {
      code: 85125,
      name: "HATO COROZAL",
      depCode: 85
    },
    {
      code: 85136,
      name: "LA SALINA",
      depCode: 85
    },
    {
      code: 85139,
      name: "MANI",
      depCode: 85
    },
    {
      code: 85162,
      name: "MONTERREY",
      depCode: 85
    },
    {
      code: 85225,
      name: "NUNCHIA",
      depCode: 85
    },
    {
      code: 85230,
      name: "OROCUE",
      depCode: 85
    },
    {
      code: 85250,
      name: "PAZ DE ARIPORO",
      depCode: 85
    },
    {
      code: 85263,
      name: "PORE",
      depCode: 85
    },
    {
      code: 85279,
      name: "RECETOR",
      depCode: 85
    },
    {
      code: 85300,
      name: "SABANALARGA",
      depCode: 85
    },
    {
      code: 85315,
      name: "SACAMA",
      depCode: 85
    },
    {
      code: 85325,
      name: "SAN LUIS DE PALENQUE",
      depCode: 85
    },
    {
      code: 85400,
      name: "TAMARA",
      depCode: 85
    },
    {
      code: 85410,
      name: "TAURAMENA",
      depCode: 85
    },
    {
      code: 85430,
      name: "TRINIDAD",
      depCode: 85
    },
    {
      code: 85440,
      name: "VILLANUEVA",
      depCode: 85
    },
    {
      code: 86001,
      name: "MOCOA",
      depCode: 86
    },
    {
      code: 86219,
      name: "COLON",
      depCode: 86
    },
    {
      code: 86320,
      name: "ORITO",
      depCode: 86
    },
    {
      code: 86568,
      name: "PUERTO ASIS",
      depCode: 86
    },
    {
      code: 86569,
      name: "PUERTO CAICEDO",
      depCode: 86
    },
    {
      code: 86571,
      name: "PUERTO GUZMAN",
      depCode: 86
    },
    {
      code: 86573,
      name: "LEGUIZAMO",
      depCode: 86
    },
    {
      code: 86749,
      name: "SIBUNDOY",
      depCode: 86
    },
    {
      code: 86755,
      name: "SAN FRANCISCO",
      depCode: 86
    },
    {
      code: 86757,
      name: "SAN MIGUEL",
      depCode: 86
    },
    {
      code: 86760,
      name: "SANTIAGO",
      depCode: 86
    },
    {
      code: 86865,
      name: "VALLE DEL GUAMUEZ",
      depCode: 86
    },
    {
      code: 86885,
      name: "VILLAGARZON",
      depCode: 86
    },
    {
      code: 88001,
      name: "SAN ANDRES 1",
      depCode: 88
    },
    {
      code: 88564,
      name: "PROVIDENCIA",
      depCode: 88
    },
    {
      code: 91001,
      name: "LETICIA",
      depCode: 91
    },
    {
      code: 91263,
      name: "EL ENCANTO",
      depCode: 91
    },
    {
      code: 91405,
      name: "LA CHORRERA",
      depCode: 91
    },
    {
      code: 91407,
      name: "LA PEDRERA",
      depCode: 91
    },
    {
      code: 91430,
      name: "LA VICTORIA",
      depCode: 91
    },
    {
      code: 91460,
      name: "MIRITI - PARANA",
      depCode: 91
    },
    {
      code: 91530,
      name: "PUERTO ALEGRIA",
      depCode: 91
    },
    {
      code: 91536,
      name: "PUERTO ARICA",
      depCode: 91
    },
    {
      code: 91540,
      name: "PUERTO NARINO",
      depCode: 91
    },
    {
      code: 91669,
      name: "PUERTO SANTANDER",
      depCode: 91
    },
    {
      code: 91798,
      name: "TARAPACA",
      depCode: 91
    },
    {
      code: 94001,
      name: "INIRIDA",
      depCode: 94
    },
    {
      code: 94343,
      name: "BARRANCO MINAS",
      depCode: 94
    },
    {
      code: 94663,
      name: "MAPIRIPANA",
      depCode: 94
    },
    {
      code: 94883,
      name: "SAN FELIPE",
      depCode: 94
    },
    {
      code: 94884,
      name: "PUERTO COLOMBIA",
      depCode: 94
    },
    {
      code: 94885,
      name: "LA GUADALUPE",
      depCode: 94
    },
    {
      code: 94886,
      name: "CACAHUAL",
      depCode: 94
    },
    {
      code: 94887,
      name: "PANA PANA",
      depCode: 94
    },
    {
      code: 94888,
      name: "MORICHAL",
      depCode: 94
    },
    {
      code: 95001,
      name: "SAN JOSE DEL GUAVIARE",
      depCode: 95
    },
    {
      code: 95015,
      name: "CALAMAR",
      depCode: 95
    },
    {
      code: 95025,
      name: "EL RETORNO",
      depCode: 95
    },
    {
      code: 95200,
      name: "MIRAFLORES",
      depCode: 95
    },
    {
      code: 97001,
      name: "MITU",
      depCode: 97
    },
    {
      code: 97161,
      name: "CARURU",
      depCode: 97
    },
    {
      code: 97511,
      name: "PACOA",
      depCode: 97
    },
    {
      code: 97666,
      name: "TARAIRA",
      depCode: 97
    },
    {
      code: 97777,
      name: "PAPUNAUA",
      depCode: 97
    },
    {
      code: 97889,
      name: "YAVARATE",
      depCode: 97
    },
    {
      code: 99001,
      name: "PUERTO CARRENO",
      depCode: 99
    },
    {
      code: 99524,
      name: "LA PRIMAVERA",
      depCode: 99
    },
    {
      code: 99624,
      name: "SANTA ROSALIA",
      depCode: 99
    },
    {
      code: 99773,
      name: "CUMARIBO",
      depCode: 99
    }
   ]

   filteredOptions: Observable<Municipality[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.announceForm = this.formBuilder.group({
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  displayFn(municipio?: Municipality): string | undefined {
    return municipio ? municipio.name : undefined;
  }

  private _filter(name: string): Municipality[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  onSubmit(){
    
  }

}
