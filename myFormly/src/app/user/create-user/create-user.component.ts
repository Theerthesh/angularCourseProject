import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;

  isUserAdd: boolean = false;
  salutation = [
    { value: 'mr', label: 'Mr.' },
    { value: 'mrs', label: 'Mrs.' },
    { value: 'ms', label: 'Ms.' },
    { value: 'dr', label: 'Dr.' },
    { value: 'prof', label: 'Prof.' },
    { value: 'capt.', label: 'Capt.' },
    { value: 'mast.', label: 'Mast.' },
    { value: 'brig.', label: 'Brig.' }
  ];
  form = new FormGroup({});
  model = {
    salutation: '',
    fname: '',
    mname: '',
    lname: '',
    email: '',
    gender: '',
    mobile_number: '',
    empId: ''
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'salutation',
      type: 'select',
      templateOptions: {
        label: 'Salutation',
        placeholder: 'Select salutation',
        options: this.salutation,
        change: () => {
          this.onChangeSalutation()
        },
        required: true,
      },
      expressionProperties: {
        'templateOptions.options': (model: any) => {
          if (model.gender === 'male') {
            return this.salutation.filter(s => ['mr', 'dr', 'prof', 'capt.', 'mast.', 'brig.'].includes(s.value));
          } else if (model.gender === 'female') {
            return  this.salutation.filter(s => ['mrs', 'ms', 'dr', 'prof', 'capt.', 'brig.'].includes(s.value));
          } else if(model.gender === 'transgender'){
            return this.salutation.filter(s => ['dr', 'prof', 'capt.', 'brig.'].includes(s.value));
          }else{
            return this.salutation;
          }
        },
      },
    },
    {
      key: 'empId',
      type: 'input',
      props: {
        type: 'number',
        label: 'Employee_Id',
        placeholder: 'Enter Employee Id',
        required: true,
        minLength: 2,
        maxLength: 4,
        pattern: '^[0-9]{2,4}$'
      },
      validation: {
        messages: {
          pattern: 'Employee ID must be between 2 and 4 digits longs'
        }
      }

    },
    {
      key: 'fname',
      type: 'input',
      props: {
        label: 'First name',
        placeholder: 'Enter First name',
        required: true,
        maxLength: 30
      },
      validation: {
        messages: {
          maxlength: 'maximum 30 number required'
        }
      },
      validators: {
        validation: ['noSpaces', 'alphabet']
      }
    },
    {
      key: 'mname',
      type: 'input',
      props: {
        label: 'Middel name',
        placeholder: 'Enter Middel name',
        maxLength: 30
      },
      validators: {
        validation: ['noSpaces', 'alphabet']
      }
    },
    {
      key: 'lname',
      type: 'input',
      props: {
        label: 'Last name',
        placeholder: 'Enter Last name',
        required: true,
        maxLength: 30
      },
      validation: {
        messages: {
          required: 'This field is required'
        }
      },
      validators: {
        validation: ['noSpaces', 'alphabet']
      }
    },

    {
      key: 'email',
      type: 'input',
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        required: true
      },
      validators: {
        email: {
          expression: (c: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.value),
          message: 'Please enter a valid email address'
        }
      },
    },
    {
      key: 'gender',
      type: 'select',
      props: {
        label: 'Gender',
        placeholder: 'Select Gender',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'transgender', label: 'Transgender' }
        ],
        class: "form-control",
        required: true
      },
      validators: {
        missmatch: {
          expression: (c: AbstractControl) => {
            let salutation = this.model.salutation;
            if ((c.value === 'female' && (salutation === 'mast' || salutation === 'mr')) || (c.value === 'male' && (salutation === 'ms' || salutation === 'mrs'))) {
              this.model.salutation = '';
              this.form.get('salutation')?.setValue('' as never);
              return false;
            }
            else {
              return true;
            }
          },
          message: 'Salutation is mismatched'
        }
      }
    },
    {
      key: 'mobile_number',
      type: 'input',
      props: {
        type: 'number',
        label: 'Mobile Number',
        placeholder: 'Enter Mobile Number',
        required: true,
        pattern: '^[0-9]{10,10}$',
      },
      validation: {
        messages: {
          pattern: 'Please enter valid mobile number with 10 digit'
        }
      },

    }
  ]

  constructor(private usrSrv: UserService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.isUserAdd = false;
  }

  onChangeSalutation() {
    if (this.model.salutation === 'mr' || this.model.salutation === 'mast') {
      this.model.gender = "male"
      this.form.get('gender')?.setValue(this.model.gender as never);
    } else if (this.model.salutation === 'ms' || this.model.salutation === 'mrs') {
      this.model.gender = "female"
      this.form.get('gender')?.setValue(this.model.gender as never);
    }
  }

  OnSubmit() {
    if (this.form.valid) {
    }
    let user: User = {
      Salutation: this.model.salutation,
      FirstName: this.model.fname,
      LastName: this.model.lname,
      MiddelName: this.model.mname,
      EmailId: this.model.email,
      Gender: this.model.gender,
      MobileNumber: Number(this.model.mobile_number),
      Employee_id: Number(this.model.empId)
    };

    this.usrSrv.adduser(user);
    this.isUserAdd = true;
    this.onOpenDialog();

  }

  onClose(): void {
    this.dialog.closeAll();
    this.router.navigate(['/list']);
  }

  onOpenDialog() {
    const openDialog = this.dialog.open(this.dialogContent);

    openDialog.afterClosed().subscribe(result => {
      this.router.navigate(['/list']);
    });
  }
}
