import Swal, { SweetAlertPosition } from 'sweetalert2';
import { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

export class Sweetalert2 {
    public static toast(
        title$: string,
        icon$: SweetAlertIcon = 'success',
        text$?: string,
        position$: SweetAlertPosition = 'top-right',
        timer$: number = 3000
    ) {
        const Toast = Swal.mixin({
            toast: true,
            position: position$,
            showConfirmButton: false,
            timer: timer$,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        Toast.fire({
            icon: icon$,
            title: title$,
            text: text$
        } as SweetAlertOptions);
    }
}
