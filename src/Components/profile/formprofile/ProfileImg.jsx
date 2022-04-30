import React from 'react'
import { useSelector } from 'react-redux'
import perfil1 from '../../../heroes/User.png'

export const ProfileImg = ({imag}) => {

    const {activeUser, Porcentage} = useSelector(state => state.auth)
    return (
        <>
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark image-round flex-column'>
                <div className="person-img">
                    {
                        (activeUser?.urlImage)
                        ?
                        <img src = {imag || activeUser?.urlImage} className="img-fluid" alt="..." style = {{objectFit: 'cover', borderRadius: '50%', height: '300px', width: '100%'}} />
                        :
                        <img src = {imag || perfil1} className="img-fluid" alt="..." style = {{objectFit: 'cover', borderRadius: '50%', height: '300px', width: '100%'}} />
                    }

                    {
                        (Porcentage > 0)
                            &&
                        <div className="col-12">
                            <label className='d-flex justify-content-center'>Subiendo imagen</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                            </div>
                        </div>
                    }
                </div>

                <div className="person-name my-3">
                    <h3 className = 'text-white'>{activeUser?.name} {activeUser?.lastName}</h3>
                </div>
                
            </div>  
        </>
    )
}
