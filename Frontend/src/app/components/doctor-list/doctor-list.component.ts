import { Component } from '@angular/core';
import { Doctor } from '../../common/doctor';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  doctors : Doctor[]=[];

  currentDepartmentId: string | number | null= '1'

  searchMode : boolean=false;

  //keyword : string | null=null;
  
  constructor(private doctorService:DoctorService,
    private route : ActivatedRoute,
    ){}


    ngOnInit(){
      this.route.paramMap.subscribe(() => {
      this.listDoctors();
     this.displayDoctors();
     
    });
  }

    displayDoctors(){
      this.doctorService.getdoc().subscribe((data)=>{
        //console.log(data);
      this.doctors=data;
    })
    }


    listDoctors(){
      this.searchMode=this.route.snapshot.paramMap.has('keyword');
      console.log(this.searchMode)
      if(this.searchMode){
        this.handleSearchDoctors();
      }else{
        this.handleListDoctors();
      }
      
     
      }

      /*handleSearchDoctors(){
        this.keyword=this.route.snapshot.paramMap.get('keyword');
        this.doctorService.searchDoctors(this.keyword).subscribe((data)=>{
          this.doctors=data;
        },
        (error) =>{
          console.error('Error fetching search results:',error);
        }
        );
      }
      handleListDoctors(){
        this.currentDepartmentId=this.route.snapshot.paramMap.get('departmentId');
        this.doctorService.getDoctorList(this.currentDepartmentId).subscribe(
          (data) => {
            this.doctors=data;
          },
          (error) =>{
            console.error('Error fetching doctor list:', error);
          }
        );*/
        
        handleSearchDoctors(){
          const theKeyword:string|null=this.route.snapshot.paramMap.get('keyword');

          this.doctorService.searchDoctors(theKeyword).subscribe((data) => {
            this.doctors=data;
          })

        }

        handleListDoctors(){
          const hasDepartmentId:boolean=this.route.snapshot.paramMap.has('id');
          if(hasDepartmentId){
            this.currentDepartmentId=this.route.snapshot.paramMap.get('id');
          }else{
            this.currentDepartmentId=1;
          }
          this.doctorService.getDoctorList(this.currentDepartmentId).subscribe((data) =>{
            this.doctors=data;
          })
        }
       




      }
    
    


