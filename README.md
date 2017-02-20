# primeros-pasos-en-nodejs-jairo-lucas-miguel-ivan


## Introducción

En esta práctica hemos trabajado con la plantilla gitbook-boilerplate para agregar una estructura nueva al libro y simplificar
el despliegue a GH-PAGES , por otro lado hemos creado un gulpfile para automatizar el despliegue en gitbook y GH-PAGES y finalmente
lo hemos desplegado al https://iaas.ull.es.

## Despliegue en Iaas

**Conectarse al Iaas**
```bash 
    ssh usuario@10.6.129.243
```

**Configurar clave si no estaba previamente configurada en el Iaas**

* 1.Situarse en la carpeta ssh

* 2.Generar la clave ssh-keygen -t rsa

* 3.Crear una nueva ssh key en Github y copiar la clave que se genero en el paso anterior

    ![](https://help.github.com/assets/images/help/settings/ssh-key-paste.png)

* 4.En la carpeta ssh crear un fichero llamado config y añadir lo siguiente:

```bash 
    usuario@ubuntu:~$ cat ~/.ssh/config 
        Host github.com
        HostName github.com
        user git
        IdentityFile /home/usuario/.ssh/claveiaas
```

* 5.Clonar repositorio de github en el Iaas ```git clone https://github.com/ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-jairo-lucas-miguel-ivan.git```

* 6.Entrar en la carpeta clonado y levanar el servidor ```nodejs app.js```

* 7.Ir al navegador y poner la dirección IP y el puerto,en este ejemplo sería así: 
```
 10.6.129.243:8080
```

## Enlaces

* [Enlace a Gh-pages](https://ull-esit-dsi-1617.github.io/tareas-iniciales-jairo-lucas-ivan/)
* [Enlace a Gitbook](https://www.gitbook.com/book/alu0100785265/tarea-inicial/details)
* [Enlace a instrucciones de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales2.html)
* [Enlace a repositorio de la práctica](https://github.com/ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-jairo-lucas-miguel-ivan)
* [Enlace a página asignatura](https://campusvirtual.ull.es/1617/course/view.php?id=1136)

## Páginas personales

* [Iván González Aguiar](https://ivan-ga.github.io/)
* [Miguel Parra Esquivel](https://alu0100200393.github.io/)
* [Jairo González Lemus](https://alu0100813272.github.io/)
* [José Lucas Ruiz Glez](https://alu0100785265.github.io/)
