import {
    AlignTextLeftOne,
    DoubleRight,
    FolderOpen,
    Home,
    PlayOne,
    PreviewCloseOne,
    PreviewOpen,
    ReplayMusic,
    Save,
    SettingTwo,
} from '@icon-park/react';
import styles from './bottomControlPanel.module.scss';
import {useStore} from 'reto';
import {GuiStateStore, MenuPanelTag} from '@/Core/store/GUI';
import {switchAuto} from '@/Core/controller/gamePlay/autoPlay';
import {switchFast} from '@/Core/controller/gamePlay/fastSkip';
import {playBgm} from '@/Core/util/playBgm';

export const BottomControlPanel = () => {
    const GUIStore = useStore(GuiStateStore);
    return (<div className={styles.ToCenter}>
        {GUIStore.GuiState.showTextBox && <div className={styles.main}>
            {GUIStore.GuiState.showTextBox && (
                <span className={styles.singleButton} onClick={() => GUIStore.setVisibility('showTextBox', false)}>
                <PreviewCloseOne className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>隐藏</span>
            </span>
            )}
            {!GUIStore.GuiState.showTextBox && (
                <span className={styles.singleButton} onClick={() => GUIStore.setVisibility('showTextBox', true)}>
                <PreviewOpen className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>显示</span>
            </span>
            )}
            <span className={styles.singleButton} onClick={() => GUIStore.setVisibility('showBacklog', true)}>
                <AlignTextLeftOne className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>回想</span>
            </span>
            <span className={styles.singleButton} onClick={() => {
                let VocalControl: any = document.getElementById('currentVocal');
                if (VocalControl !== null) {
                    VocalControl.currentTime = 0;
                    VocalControl.pause();
                    VocalControl.play();
                }
            }}>
                <ReplayMusic className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>重播</span>
            </span>
            <span id="Button_ControlPanel_auto" className={styles.singleButton} onClick={switchAuto}>
                <PlayOne className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>自动</span>
            </span>
            <span id="Button_ControlPanel_fast" className={styles.singleButton} onClick={switchFast}>
                <DoubleRight className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>快进</span>
            </span>
            <span
                className={styles.singleButton}
                onClick={() => {
                    GUIStore.setMenuPanelTag(MenuPanelTag.Save);
                    GUIStore.setVisibility('showMenuPanel', true);
                }}
            >
                <Save className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>存档</span>
            </span>
            <span
                className={styles.singleButton}
                onClick={() => {
                    GUIStore.setMenuPanelTag(MenuPanelTag.Load);
                    GUIStore.setVisibility('showMenuPanel', true);
                }}
            >
                <FolderOpen className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>读档</span>
            </span>
            <span
                className={styles.singleButton}
                onClick={() => {
                    GUIStore.setMenuPanelTag(MenuPanelTag.Option);
                    GUIStore.setVisibility('showMenuPanel', true);
                }}
            >
                <SettingTwo className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>选项</span>
            </span>
            <span
                className={styles.singleButton}
                onClick={() => {
                    GUIStore.setVisibility('showTitle', true);
                    playBgm(GUIStore.GuiState.titleBgm);
                }}
            >
                <Home className={styles.button} theme="outline" size="30" fill="#f5f5f7" strokeWidth={3.5}/>
                <span className={styles.button_text}>标题</span>
            </span>
        </div>}
        </div>
    );
};
