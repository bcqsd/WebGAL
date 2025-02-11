import {ISentence} from '@/Core/interface/coreInterface/sceneInterface';
import {IPerform} from '@/Core/interface/coreInterface/performInterface';
import {runtime_currentSceneData} from "@/Core/runtime/sceneData";
import {getRef} from "@/Core/store/storeRef";
import {assetSetter, fileType} from "@/Core/util/assetSetter";
import {sceneFetcher} from "@/Core/util/sceneFetcher";
import {sceneParser} from "@/Core/parser/sceneParser";
import {resetStage} from "@/Core/util/resetStage";

/**
 * 结束游戏
 * @param sentence
 */
export const end = (sentence: ISentence): IPerform => {
    resetStage(true);

    // 重新获取初始场景
    const sceneUrl: string = assetSetter('start.txt', fileType.scene);
    // 场景写入到运行时
    sceneFetcher(sceneUrl).then((rawScene) => {
        runtime_currentSceneData.currentScene = sceneParser(rawScene, 'start.txt', sceneUrl);
    });
    getRef('GuiRef').setVisibility('showTitle', true);
    return {
        performName: 'none',
        duration: 0,
        isOver: false,
        isHoldOn: false,
        stopFunction: () => {
        },
        blockingNext: () => false,
        blockingAuto: () => true,
        stopTimeout: undefined, // 暂时不用，后面会交给自动清除
    };
};
