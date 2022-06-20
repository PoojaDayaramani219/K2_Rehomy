import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {Utils} from 'tslint';
@Injectable({
  providedIn: 'root'
})
export class S3UtilService {
  constructor() { }
  uploadfile(file:any, s3Detail:any, FOLDER:any) {

    let accessKeyId = s3Detail.access_key ||"";
    let secretAccessKey = s3Detail.secret_key ||"";
    let bucketName = s3Detail.bucketname ||"";
    const bucket = new S3(
      {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: 'ap-south-1'
      }
    );

    const params = {
      Bucket: bucketName,
      Key: FOLDER + file.name,
      Body: file
    };

    return new Promise(function(resolve, reject) {
      bucket.upload(params, function(error:any, result:any) {
        if (error) {
      
          reject(false);
        }
   
        resolve(true);
      });
    });

    
  }

  uploadRenamedfile(file:any, filename:any, s3Detail:any, FOLDER:any) {

    let accessKeyId = s3Detail.access_key ||"";
    let secretAccessKey = s3Detail.secret_key ||"";
    let bucketName = s3Detail.bucketname ||"";
    const bucket = new S3(
      {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: 'ap-south-1'
      }
    );

    const params = {
      Bucket: bucketName,
      Key: FOLDER + filename,
      Body: file
    };

    return new Promise(function(resolve, reject) {
      bucket.upload(params, function(error:any, result:any) {
        if (error) {
      
          reject(false);
        }
   
        resolve(true);
      });
    });

    
  }

  uploadImageFile(file:any, s3Detail:any, FOLDER:any, filename:any) {
      
      let accessKeyId = 'AKIAS4LDJR4GVZHZZ2RB';
      let secretAccessKey = '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';
      let bucketName = 'smlfrontend';
      const bucket = new S3(
        {
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey,
          region: 'ap-south-1'
        }
      );
  
      const params = {
        Bucket: bucketName,
        Key: FOLDER + filename,
        Body: file
      };
  
      return new Promise(function(resolve, reject) {
        bucket.upload(params, function(error:any, result:any) {
          if (error) {
        
            reject(false);
          }
    
          resolve(true);
        });
      });
  
      
  }

  getImageFromS3(imgkey) {
    let accessKeyId = 'AKIAS4LDJR4GVZHZZ2RB';
    let secretAccessKey = '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';
    let bucketName = 'smlfrontend';
    const options = {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region : 'ap-south-1',
    }

  var s3 = new S3(options);
  const url = s3.getSignedUrl('getObject', {
    Bucket: bucketName,
    Key: imgkey,
  })
  return url;

  // s3.getObject({ Bucket: s3Detail.bucketname ||"" ,Key: imgkey}, function(err,file){
  // });
  }
}