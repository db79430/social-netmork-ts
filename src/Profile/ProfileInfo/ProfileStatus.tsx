import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    editMode: boolean
    status: string


}

type ProfileStateType = {
    updateUserStatus: (status: string) => void
    status: string

}



export class ProfileStatus extends React.Component<ProfileStateType>  {

    state: ProfileStatusType  = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode = () => {
        // console.log(this.state.editMode)
        this.setState({
            editMode: true,


        })
        this.state.editMode = true

        // console.log(this.state.editMode)

    }
    deactivateEditMode = () => {
        // console.log(this.state.editMode)
        this.setState({
            editMode: false

        })
       this.props.updateUserStatus(this.state.status)

        // console.log(this.state.editMode)

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                status: e.currentTarget.value
            }

        )

    }
    componentDidUpdate(prevProps: Readonly<ProfileStateType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode }>{this.props.status}</span>
                </div>

                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )

    }



}