// Copyright 2016-present 650 Industries. All rights reserved.

#import <Foundation/Foundation.h>
#import <ABI43_0_0ExpoModulesCore/ABI43_0_0EXExportedModule.h>
#import <ABI43_0_0ExpoModulesCore/ABI43_0_0EXModuleRegistryConsumer.h>
#import <ABI43_0_0ExpoModulesCore/ABI43_0_0EXEventEmitter.h>
#import <ABI43_0_0ExpoModulesCore/ABI43_0_0EXFileSystemInterface.h>

@interface ABI43_0_0EXFileSystem : ABI43_0_0EXExportedModule <ABI43_0_0EXEventEmitter, ABI43_0_0EXModuleRegistryConsumer, ABI43_0_0EXFileSystemInterface>

@property (nonatomic, readonly) NSString *documentDirectory;
@property (nonatomic, readonly) NSString *cachesDirectory;
@property (nonatomic, readonly) NSString *bundleDirectory;

- (instancetype)initWithDocumentDirectory:(NSString *)documentDirectory cachesDirectory:(NSString *)cachesDirectory bundleDirectory:(NSString *)bundleDirectory;

- (ABI43_0_0EXFileSystemPermissionFlags)permissionsForURI:(NSURL *)uri;

- (BOOL)ensureDirExistsWithPath:(NSString *)path;

- (NSString *)generatePathInDirectory:(NSString *)directory withExtension:(NSString *)extension;

@end

@protocol ABI43_0_0EXFileSystemHandler

+ (void)getInfoForFile:(NSURL *)fileUri
           withOptions:(NSDictionary *)optionxs
              resolver:(ABI43_0_0EXPromiseResolveBlock)resolve
              rejecter:(ABI43_0_0EXPromiseRejectBlock)reject;

+ (void)copyFrom:(NSURL *)from
              to:(NSURL *)to
        resolver:(ABI43_0_0EXPromiseResolveBlock)resolve
        rejecter:(ABI43_0_0EXPromiseRejectBlock)reject;

@end

@interface NSData (ABI43_0_0EXFileSystem)

- (NSString *)md5String;

@end
