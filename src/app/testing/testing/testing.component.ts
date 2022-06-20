import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MenuItem, MessageService, SelectItem } from 'primeng/api';
import { trigger, transition, animate, style } from '@angular/animations';
import { StorageService } from 'src/app/core/service/storage/storage.service';
import { HttpService } from 'src/app/core/service/http/http.service';
import { EndPoints, ApiMethod } from 'src/app/core/service/conts';
import { S3UtilService } from 'src/app/core/service/s3-util.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TestingComponent implements OnInit {
  ngOnInit(): void {
  
  }
  }
