import { Component, OnInit } from '@angular/core';
import { GridOption, AngularGridInstance, Column } from 'angular-slickgrid';
import { RowDetailStreamPreloadComponent } from './componnents/row-detail-stream-preload/row-detail-stream-preload.component';
import { RowDetailStreamComponent } from './componnents/row-detail-stream/row-detail-stream.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  columnDefinitions: Column[]=[
    {
      id: 'name',
      name: 'Name',
      field: 'name'
    },{
      id: 'score',
      name: 'Score',
      field: 'score'
    }
  ];
  gridOptions: GridOption = {};
  dataset: any[] = [];

  ngOnInit(){

    this.gridOptions = {
      enableRowSelection: true,
      autoHeight: true,
      rowSelectionOptions:{
        selectActiveRow: true
      },
      enableRowDetailView: true,
      rowDetailView:{
        process: (item)=>this.processDetail(item),
        panelRows: 3,
        viewComponent: RowDetailStreamComponent,
        preloadComponent: RowDetailStreamPreloadComponent,
        loadOnce: true
      }
    };
  }

  angularGrid:AngularGridInstance;
  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;

    this.setData();
    setInterval(()=>{
      this.setData();
    },5000);
  }

  processDetail(item:any) {
    return new Promise((resolve)=>{
      setTimeout(() => {
          resolve(item);
      }, 1000);
    });
  }

  setData(){
    let dataset = [];

    for (let index = 0; index < 15; index++) {
      dataset.push({
        id: index.toString(),
        name: index,
        score: Math.random()*100
      })
    }
    this.angularGrid.gridService.upsertItems(dataset,{highlightRow:false});
    this.dataset = dataset;
  }
}
