import React, { Component } from 'react';

class MyForm extends Component {
  render() {
		return(
            <section>
                <div>
                    {/* className='flex' */}
                    {/* <div className='mt-20 w-40 border'>dd</div> */}
                    <form className='text-center'>
                        <div className='mt-20 inline-flex text-center rounded'>
                            <div className='mr-5'>
                                <div>First Name</div>
                                <input type='text' name='first_name' placeholder='First Name' className='inline border p-2 rounded' />
                            </div>
                            <div className='mr-5'>
                                <div>Last Name</div>
                                <input type='text' name='last_name' placeholder='Last Name' className='border p-2 rounded' />
                            </div>
                            <div className='mr-5'>
                                <div>E-mail</div>
                                <input type='email' name='email' placeholder='E-mail@mail.com' className='border p-2 rounded' />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 mt-6">
                                Button
                            </button>
                        </div>
                    </form>
                </div>
            </section>
		);
	}
}

export default MyForm;
