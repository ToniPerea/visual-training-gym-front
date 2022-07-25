import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {roleList} from '../../../utils/roles';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';
import {CustomSnackbarService} from '../../../services/custom-snackbar.service';

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

    currentUser: User | undefined;

    roles = roleList;

    userForm: FormGroup;

    constructor(private builder: FormBuilder,
                private userService: UserService,
                private authService: AuthService,
                private snackBarService: CustomSnackbarService) {
        this.userForm = this.builder.group({
            name: new FormControl('', Validators.required),
            age: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            role: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void {
        if (this.authService.loggedIn()) {
            this.userService.get(this.authService.getUserInfo().email).subscribe((user) => {
                this.currentUser = user;
                this.userForm = this.builder.group({
                    name: new FormControl(user.name, Validators.required),
                    age: new FormControl(user.age, [Validators.required]),
                    email: new FormControl(user.email, [Validators.required, Validators.email]),
                    password: new FormControl(user.password, [Validators.required]),
                    role: new FormControl(user.role, [Validators.required])
                });
            });
        }
    }

    submit() {
        const userData = new User(
            this.userForm.value.name,
            this.userForm.value.age,
            this.userForm.value.email,
            this.userForm.value.password,
            this.userForm.value.role,
            'pending'
        );

        this.userService.register(userData).subscribe(() => {
            this.snackBarService.present('Cuenta creada correctamente')
        });
    }

    submitUpdate() {
        const userData = new User(
            this.userForm.value.name,
            this.userForm.value.age,
            this.userForm.value.email,
            this.userForm.value.password,
            this.userForm.value.role,
            this.userForm.value.status
        );

        this.userService.get(this.authService.getUserInfo().email).subscribe((user) => {
            this.userService.put(user.email, userData).subscribe(() => {
                setTimeout(function (){window.location.reload()}, 1500);
                this.snackBarService.present('Datos correctamente actualizados')
            });
        });
    }
}
