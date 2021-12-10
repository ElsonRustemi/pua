import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/nodeservice.service';

interface Type {
  name: string
}


@Component({
  selector: 'app-frm-ricevutapagamento-asp',
  templateUrl: './frm-ricevutapagamento-asp.component.html',
  styleUrls: ['./frm-ricevutapagamento-asp.component.css']
})

export class FrmRicevutapagamentoAspComponent implements OnInit {


  // Form Group self explanatory but why not comment
  recievedDataForm: FormGroup;

  // Table
  files: TreeNode[];
  uploadedFiles: any[] = [];

  selectedPresence: string[] = [];

  checked: boolean = false;

  cols: any[];
  types: Type[];

  // Dropdown
  selectedType: Type;

  constructor(private nodeService: NodeService, private fb: FormBuilder, private messageService: MessageService) {

    this.types = [
      { name: "Ufficio Ticket" },
      { name: "Bonifico Bancario" },
      { name: "Bolletino Postale" }

    ]
  }

  ngOnInit(): void {


    // To be checked
    // this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
      { field: 'document', header: 'Documento Allegato' },
      { field: 'action', header: 'Azioni' }
    ];

  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(event);

    }

    this.messageService.add({
      severity: 'info', summary: 'File Uploaded', detail: ''
    });
  }


  myUploader(event) {
    console.log(event.files);
    this.uploadedFiles = event.files.map((file) => {
      return file;
    })
  }


}
