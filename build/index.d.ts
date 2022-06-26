declare type TCallback = (...params: any[]) => any;
interface IEventBusData {
    once?: boolean;
    emitted?: boolean;
    callback: TCallback;
}
interface IEventBusProps {
    __prBusData: Map<string, IEventBusData[]>;
    $once: (name: string, callback: TCallback) => any;
    $on: (name: string, callback: TCallback) => any;
    $off: (name: string, callback: TCallback) => any;
    $offAll: (name: string) => any;
    $emit: (name: string, ...params: any[]) => any;
    $reset: () => any;
    eventNames: () => string[];
}
declare const EventBus: IEventBusProps;
export { EventBus };
export default EventBus;
