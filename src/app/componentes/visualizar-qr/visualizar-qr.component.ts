import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Clipboard } from '@capacitor/clipboard';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { MatTooltip } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-visualizar-qr',
  templateUrl: './visualizar-qr.component.html',
  styleUrls: ['./visualizar-qr.component.scss']
})
export class VisualizarQrComponent implements OnInit{

  @ViewChild("tooltip", { static: true })toolTip!: ElementRef;

  contenido: string = "";
  nombre_fichero: string = "";
  imagen: any;
  url_qr: string = "";
  profesor: string | null = "";
  asignatura: string | null = ""
  tipo: string | null = "";
  nombre: string | null = "";
  descripcion: string | null = "";
  titulacion: string | null = "";
  codigo: string | null = "";
  pulsado: boolean = false;

  cargando: boolean = true;

  url: string = "";
  constructor(private api: ServiciosApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private message: MatSnackBar) { }
  
  async copiar_url(toolTip: MatTooltip){
    this.pulsado = true;
    await Clipboard.write({string: this.url_qr});
    navigator.clipboard.writeText(this.url_qr);

    setTimeout(() =>{
      this.pulsado = false;
      toolTip.hide();
    }, 2500)
  }

  async descargar_qr(){
    let ruta = await Filesystem.writeFile({
      path: this.nombre_fichero,
      directory: Directory.Documents,
      data: this.contenido
    })
    this.message.open('Codigo QR descargado en la carpeta DOCUMENTS', 'OK')
  }

  ngOnInit(): void {
    this.cargando = true
    let cadena_base64 = "data:image/png;base64, "
    let query = window.location.search;
    let parametros = new URLSearchParams(query);
    this.profesor = parametros.get('profesor')
    this.asignatura = parametros.get('asignatura')
    this.tipo = parametros.get('tipo')
    this.nombre = parametros.get('nombre')
    this.descripcion = parametros.get('descripcion')
    this.titulacion = parametros.get('titulacion')
    this.codigo = parametros.get('codigo')
    this.nombre_fichero = this.route.snapshot.params['nombre_fichero'];
    this.url_qr = this.route.snapshot.params['url'];
    this.url_qr = "https://" + this.url_qr + "/?profesor=" + this.profesor + "&asignatura=" + this.asignatura + "&tipo=" + this.tipo + "&nombre=" + this.nombre + "&descripcion=" + this.descripcion + "&titulacion=" + this.titulacion + "&codigo=" + this.codigo;
    this.api.descargar_qr(this.nombre_fichero).subscribe(respuesta =>{
      this.contenido = respuesta;
      this.url = cadena_base64 + this.contenido;
      this.imagen = this.sanitizer.bypassSecurityTrustUrl(this.url);
      this.cargando = false;
    })
    this.cargando = false;
  }

}
