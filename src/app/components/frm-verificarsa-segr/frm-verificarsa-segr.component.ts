import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/nodeservice.service';

interface Type {
  name: string
}

@Component({
  selector: 'app-frm-verificarsa-segr',
  templateUrl: './frm-verificarsa-segr.component.html',
  styleUrls: ['./frm-verificarsa-segr.component.css']
})
export class FrmVerificarsaSegrComponent implements OnInit {

  files: TreeNode[];

  cols: any[];

  types: Type[];

  selectedTypes: Type;

  constructor(private nodeService: NodeService) {

    this.types = [
      {name: 'Type 1'},
      {name: 'Type 2'}
  ];

  }

  ngOnInit(): void {

    // this.nodeService.getFilesystem().then(files => this.files = files);

    this.cols = [
      { field: 'document', header: 'Nome RSA' },
      // { field: 'size', header: 'Size' },
      { field: 'action', header: 'Data Inserimento' }
  ];


  }

}
