import { Button, CircularProgress, Dialog, DialogContent, Grid } from '@mui/material';
import classNames from 'classnames';
import { map } from 'lodash';
import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useToggle } from 'react-use';
import { GifiDto, GiftType } from '../../dtos';
import useSocketIO from '../../hooks/useSocketIO';
import { gift_icon } from '../../images/index';
import { AppState } from '../../stores/reducers';
import GiftGif from './GiftGif';
import GiftLottie from './GiftLottie';

interface GiftDialogProps {
    className?: string;
    value: GifiDto[] | any;
    loading: boolean;
    socketURL: string;
}

const GiftDialog: FC<GiftDialogProps> = ({ className, value, loading, socketURL }) => {
    const { sendGift } = useSocketIO(socketURL);
    const dialogRef = useRef(null);
    const [open, toggleOpen] = useToggle(false);
    const { currentChanel, currentLoginInformation } = useSelector(
        (state: AppState) => state.sessionState,
    );

    const onGiftClicked = (item: GifiDto) => {
        sendGift({
            chanel_id: currentChanel,
            quantity: 99,
            gift_data: item,
            time: new Date().toISOString(),
            ...currentLoginInformation,
        });

        toggleOpen();
    };

    return (
        <>
            <Button
                variant="text"
                onClick={toggleOpen}
                disableRipple
                className={classNames(className)}>
                <img src={gift_icon.default} className="ms-auto" style={{ width: '5rem' }} />
            </Button>

            <Dialog
                ref={dialogRef}
                open={true}
                onClose={toggleOpen}
                className={classNames({ 'd-none': !open })}
                aria-labelledby="alert-dialog-title"
                PaperProps={{ className: 'dark-dialog gift-dialog' }}
                aria-describedby="alert-dialog-description"
                maxWidth="sm">
                <DialogContent className="text-light">
                    <Grid container spacing={1} className="gift-container">
                        {loading && <CircularProgress />}
                        {!loading &&
                            map(value, (item, idx) => {
                                return (
                                    <Grid
                                        item
                                        md={3}
                                        key={idx}
                                        className={classNames('position-relative')}>
                                        {item.gift_type === GiftType.LOTTIE && (
                                            <GiftLottie
                                                resource={item.resource}
                                                name={item.name}
                                                isStopped={!open}
                                                onClick={() => onGiftClicked(item)}
                                            />
                                        )}
                                        {item.gift_type === GiftType.GIF && (
                                            <GiftGif
                                                resource={item.resource}
                                                name={item.name}
                                                isStopped={!open}
                                                onClick={() => onGiftClicked(item)}
                                            />
                                        )}
                                    </Grid>
                                );
                            })}
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default GiftDialog;
