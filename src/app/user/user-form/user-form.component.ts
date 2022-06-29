import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {roleList} from "../../../utils/roles";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    /**
     * Title of the component
     */
    @Input() public title = '';

    /**
     * Status of the component
     */
    @Input() public status = '';

    roles = roleList;

    userForm: FormGroup;

    constructor(private builder: FormBuilder, private userService: UserService
    ) {
        this.userForm = this.builder.group({
            name: new FormControl('', Validators.required),
            age: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            role: new FormControl('', [Validators.required])
        })
    };

    ngOnInit(): void {

    }

    submit(){
        const userData = new User(this.userForm.value.name, this.userForm.value.age, this.userForm.value.email,
            this.userForm.value.password, this.userForm.value.role, 'pending')

        this.userService.register(userData).subscribe()
    }

    submitUpdate(){
        const userData = new User(this.userForm.value.name, this.userForm.value.age, this.userForm.value.email,
            this.userForm.value.password, this.userForm.value.role, this.userForm.value.status)

        this.userService.put(userData).subscribe()
    }


}
