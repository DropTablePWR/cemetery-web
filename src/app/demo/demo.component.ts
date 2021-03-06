import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
 
@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 
  constructor(
    private router: Router
  )
  {
 
  }
 
  async ngOnInit() {
 
 
    let buildUrl = "assets/demo/Build";
    let config: any = {
      dataUrl: buildUrl + "/build.data",
      frameworkUrl: buildUrl + "/build.framework.js",
      codeUrl: buildUrl + "/build.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "3D-Cemetery",
      productVersion: "0.1",
    };
 
    var container: any = document.querySelector("#unity-container");
    var canvas: any = document.querySelector("#unity-canvas");
    var loadingBar: any = document.querySelector("#unity-loading-bar");
    var progressBarFull: any = document.querySelector("#unity-progress-bar-full");
    var fullscreenButton: any = document.querySelector("#unity-fullscreen-button");
    var mobileWarning: any = document.querySelector("#unity-mobile-warning");
 
 
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container!.className = "unity-mobile";
      // Avoid draining fillrate performance on mobile devices,
      // and default/override low DPI mode on mobile browsers.
      config.devicePixelRatio = 1;
      mobileWarning!.style.display = "block";
      setTimeout(() => {
        mobileWarning!.style.display = "none";
      }, 5000);
    } else {
      canvas.style.width = "960px";
      canvas.style.height = "600px";
    }
    loadingBar.style.display = "block";
 
    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });
  }
 
}