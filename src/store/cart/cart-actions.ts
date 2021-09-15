import { useAppDispatch } from "../storeHooks";
import { uiActions } from "../ui-slice";
import { cartActions } from "./cart-slice";
import { Notification } from "../ui-slice";

export const sendCartData = (cartData: any) => {
  return async (dispatch: any) => {
    const notificationDataStart: Notification = {
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data',
    };
      
    dispatch(uiActions.showNotification(notificationDataStart));

    const sendRequest = async (): Promise<any> => {
      const response = await fetch(
        'https://react-rredux-toolkit-ts-test-default-rtdb.europe-west1.firebasedatabase.app/cart.json', 
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };

    try {
      await sendRequest();

      const notificationDataSuccess: Notification = {
        status: 'success',
        title: 'Success',
        message: 'Sent cart data',
      };
      dispatch(uiActions.showNotification(notificationDataSuccess));

    } catch (err) {
      const notificationDataFail: Notification = {
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed',
      };
      dispatch(uiActions.showNotification(notificationDataFail));
    }

  }
};

export const fetchCartData = () => {
  return async (dispatch: any) => {

    const fetchData = async () => {
      const response = await fetch(
        'https://react-rredux-toolkit-ts-test-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );
      
      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }
      const responseData = await response.json();

      return responseData;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));

      // for probable fix
      // dispatch(cartActions.replaceCart({      
      //   items: cartData.items || [],
      //   totalQuantity: cartData.totalQuantity,
      // }));

    } catch (err) {
      const notificationDataFail: Notification = {
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed',
      };
      dispatch(uiActions.showNotification(notificationDataFail));
    }
  }
};