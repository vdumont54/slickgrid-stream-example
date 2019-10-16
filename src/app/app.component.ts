import { Component, OnInit } from '@angular/core';
import { GridOption, AngularGridInstance, Column, ExtensionName } from 'angular-slickgrid';
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
  expandedRows:any[] = [];

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
        loadOnce: true,
        useRowClick:false,
        onAfterRowDetailToggle: (e, args)=>{
          let index = this.expandedRows.indexOf(args.item.id);
          if(index==-1 && !args.item.__collapsed){
            this.expandedRows.push(args.item.id);
          }
          if(index>-1 && args.item.__collapsed){
            this.expandedRows.splice(index,1);
          }
        }
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
      }, 0);
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

    const rowDetailInstance = this.angularGrid.extensionService.getSlickgridAddonInstance(ExtensionName.rowDetailView);
    // let expandedRows = rowDetailInstance.getExpandedRows();
    // console.log(expandedRows);

    this.angularGrid.gridService.upsertItems(dataset,{highlightRow:false});
    this.dataset = dataset;

    this.expandedRows.forEach(row => {
      let found = dataset.find(x=>x.id==row);
      if(found){
        rowDetailInstance.expandDetailView(found)
      }
    });
  }
}
