import {FC, useEffect} from "react";
import styles from './options.module.scss';
import {NormalButton} from "./NormalButton";
import {NormalOption} from "./NormalOption";
import {OptionSlider} from "./OptionSlider";
import {useStore} from "reto";
import {userDataStateStore} from "../../../../Core/store/userData";
import {getStorage, setStorage} from "../../../../Core/controller/storage/storageController";
import {TextPreview} from "./TextPreview/TextPreview";
import {setVolume} from "../../../../Core/util/setVolume";
import {eventSender} from "@/Core/controller/eventBus/eventSender";

export const Options: FC = () => {
    const userDataStorage = useStore(userDataStateStore);
    useEffect(getStorage, []);
    return <div className={styles.Options_main}>
        <div className={styles.Options_top}>
            <div className={styles.Options_title}>
                {/* <div className={styles.Option_title_text_ts + ' ' + styles.Option_title_text}>选项</div> */}
                {/* <div className={styles.Option_title_text_shadow + ' ' + styles.Option_title_text}>选项</div> */}
                <div className={styles.Option_title_text}>选项</div>
            </div>
        </div>
        <div className={styles.Options_main_content}>
            <div className={styles.Options_main_content_half}>
                <NormalOption key="option0" title="文字显示速度">
                    <NormalButton textList={['慢', '中', '快']} functionList={[
                        () => {
                            userDataStorage.setOptionData('textSpeed', 0);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('textSpeed', 1);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('textSpeed', 2);
                            setStorage();
                        },
                    ]}
                                  currentChecked={userDataStorage.userDataState.optionData.textSpeed}/>
                </NormalOption>
                <NormalOption key="option1" title="自动播放速度">
                    <NormalButton textList={['慢', '中', '快']} functionList={[
                        () => {
                            userDataStorage.setOptionData('autoSpeed', 0);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('autoSpeed', 1);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('autoSpeed', 2);
                            setStorage();
                        },
                    ]}
                                  currentChecked={userDataStorage.userDataState.optionData.autoSpeed}/>
                </NormalOption>
                <NormalOption key="option2" title="文本大小">
                    <NormalButton textList={['小', '中', '大']} functionList={[
                        () => {
                            userDataStorage.setOptionData('textSize', 0);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('textSize', 1);
                            setStorage();
                        },
                        () => {
                            userDataStorage.setOptionData('textSize', 2);
                            setStorage();
                        },
                    ]}
                                  currentChecked={userDataStorage.userDataState.optionData.textSize}/>
                </NormalOption>
                <NormalOption key="option3" title="文本显示预览">
                    {/* 这是一个临时的组件，用于模拟文本预览的效果 */}
                    <TextPreview/>
                </NormalOption>

            </div>
            <div className={styles.Options_main_content_half}>
                <NormalOption key="option4" title="主音量">
                    <OptionSlider initValue={userDataStorage.userDataState.optionData.volumeMain}
                                  uniqueID="主音量" onChange={(event) => {
                        const newValue = event.target.value;
                        userDataStorage.setOptionData('volumeMain', Number(newValue));
                        setStorage();
                        eventSender('setVolume_target',0,10);
                    }}
                    />
                </NormalOption>
                <NormalOption key="option5" title="语音音量">
                    <OptionSlider initValue={userDataStorage.userDataState.optionData.vocalVolume}
                                  uniqueID="语音音量" onChange={(event) => {
                        const newValue = event.target.value;
                        userDataStorage.setOptionData('vocalVolume', Number(newValue));
                        setStorage();
                        eventSender('setVolume_target',0,10);
                    }}/>
                </NormalOption>
                <NormalOption key="option6" title="背景音乐音量">
                    <OptionSlider initValue={userDataStorage.userDataState.optionData.bgmVolume}
                                  uniqueID="背景音乐音量" onChange={(event) => {
                        const newValue = event.target.value;
                        userDataStorage.setOptionData('bgmVolume', Number(newValue));
                        setStorage();
                        eventSender('setVolume_target',0,10);
                    }}/>
                </NormalOption>
            </div>
        </div>
    </div>;
};
