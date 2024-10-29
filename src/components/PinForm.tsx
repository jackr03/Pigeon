import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const PinForm: React.FC = () => {
    const navigate = useNavigate();

    // TODO: Create pin fields dynamically
    const initialValues = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
    };

    const validationSchema = Yup.object({
      pin1: Yup.number()
        .min(0)
        .max(9),
      pin2: Yup.number()
        .min(0)
        .max(9),
      pin3: Yup.number()
        .min(0)
        .max(9),
      pin4: Yup.number()
        .min(0)
        .max(9),
      pin5: Yup.number()
        .min(0)
        .max(9),
      pin6: Yup.number()
        .min(0)
        .max(9),
    });

    const handleSubmit = (values: typeof initialValues) => {
        const pin = Object.values(values).join('');

        // ! PLACEHOLDER
        console.log(pin);
        
        navigate('/room');
    };

    return (
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <div className='flex gap-2'>
              {['pin1', 'pin2', 'pin3', 'pin4', 'pin5', 'pin6'].map((pin) => (
                  <Field
                    key={pin}
                    name={pin}
                    type='text'
                    maxLength='1'
                    className='h-10 w-10 text-center p-2 border border-gray-300 rounded-lg'
                  />
                ))}
            </div>

            <button type='submit'
              className='mt-4 p-2 bg-blue-500 text-white rounded-lg'
              disabled={isValid}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
}

export default PinForm;